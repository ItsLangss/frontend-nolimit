import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const DataGridToolbar = (props) => {
  const { title, isWithYearRange, yearRange, setYearRange } = props

  return (
    <>
      <Stack direction='row' alignItems='center' flexWrap='nowrap' padding='24px' height={80}>
        {/* TITLE */}
        <Typography fontWeight={600} variant='h6' flex={1}>{title}</Typography>

        {/* ACTIONS */}
        <Stack direction='row' alignItems='center' flexWrap='nowrap'>
          {/* YEAR RANGE SLIDER */}
          {isWithYearRange && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <TextField
                label='Start Year'
                type='number'
                size='small'
                value={yearRange[0]}
                onChange={(e) => {
                  const newStart = Number(e.target.value)
                  setYearRange([ newStart, yearRange[1] ])
                }}
                inputProps={{ min: 1960, max: yearRange[1] }}
                sx={{ width: 100 }}
              />
              <TextField
                label='End Year'
                type='number'
                size='small'
                value={yearRange[1]}
                onChange={(e) => {
                  const newEnd = Number(e.target.value)
                  setYearRange([ yearRange[0], newEnd ])
                }}
                inputProps={{ min: yearRange[0], max: new Date().getFullYear() }}
                sx={{ width: 100 }}
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </>
  )
}

DataGridToolbar.propTypes = {
  title: PropTypes.string,
  isWithYearRange: PropTypes.bool,
  yearRange: PropTypes.array,
  setYearRange: PropTypes.func
}

export default DataGridToolbar