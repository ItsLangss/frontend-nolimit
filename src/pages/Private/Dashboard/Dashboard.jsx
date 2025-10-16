import { useState, useEffect, useCallback } from 'react'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { PieChart, LineChart } from '@mui/x-charts'

import useAPI from 'src/hooks/useAPI'

import DataGridToolbar from 'src/components/DataGridToolbar/DataGridToolbar'

import { tabList } from './dashboardConstants'

const Dashboard = () => {
  // STATES
  const [ search, setSearch ] = useState('')
  const [ currentTab, setCurrentTab ] = useState(tabList[0].value)
  const [ yearRange, setYearRange ] = useState([ 2020, 2025 ])
  const { data, loading, error, fetchWorldBank } = useAPI()

  // DERIVED CHART DATA
  const chartLabels = data?.normalized?.map(d => d.year) ?? []
  const chartValues = data?.normalized?.map(d => d.value) ?? []

  const resetAllStates = useCallback(() => {
    setSearch('')
  }, [])

  useEffect(() => {
    resetAllStates()
  }, [ currentTab, resetAllStates ])

  useEffect(() => {
    fetchWorldBank({
      start: yearRange[0],
      end: yearRange[1]
    }).catch(() => {})
  }, [ fetchWorldBank, currentTab, yearRange ])

  return (
    <Stack height='100%' overflow='hidden'>
      {/* TABS */}
      <Tabs
        onChange={(_, value) => setCurrentTab(value)}
        value={currentTab}
      >
        {tabList.map((item, index) => (
          <Tab
            key={index}
            value={item.value}
            label={item.label}
            sx={{ minWidth: 180, fontWeight: 500, textTransform: 'capitalize' }}
          />
        ))}
      </Tabs>

      <Divider />

      {/* CONTENT */}
      <Stack
        overflow='auto'
        m='24px'
        height='100%'
        bgcolor='white'
        sx={{ boxShadow: theme => `0px 4px 15px ${alpha(theme.palette.common.black, 0.08)}` }}
      >
        <DataGridToolbar
          title='World Banks Population'
          search={search}
          setSearch={setSearch}
          isWithColumnsFilter
          isWithYearRange
          yearRange={yearRange}
          setYearRange={setYearRange}
        />

        <Divider />

        {/* CHART AREA */}
        <Stack flex={1} justifyContent='center' alignItems='center'>
          {loading && <Typography>Loading data...</Typography>}
          {error && <Typography color='error'>Error loading data</Typography>}

          {!loading && !error && (
            <Stack sx={{ width: '100%', maxWidth: 900, p: 20 }}>
              {currentTab === tabList[0].value ? (
                <LineChart
                  height={260}
                  series={[ { data: chartValues, label: 'Population' } ]}
                  xAxis={[ { data: chartLabels, scaleType: 'point' } ]}
                />
              ) : (
                <PieChart
                  height={360}
                  series={[
                    {
                      data: chartLabels.map((label, index) => ({
                        id: index,
                        value: chartValues[index],
                        label: label
                      }))
                    }
                  ]}
                />
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Dashboard