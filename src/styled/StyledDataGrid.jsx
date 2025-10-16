import { styled } from '@mui/material/styles'
import { DataGridPremium } from '@mui/x-data-grid-premium'

// NOTE: THIS MUST BE SET MANUALLY
const selectedPrimaryMainColor = '#E7E4F1' // = ALPHA(RPIMARY.MAIN , 0.12)

const StyledDataGrid = styled(({ className, ...props }) => (
  <DataGridPremium
    // HEADER
    columnHeaderHeight={56}
    disableColumnMenu
    // SELECTION
    checkboxSelection
    // PAGINATION
    pagination
    pageSizeOptions={[ 5, 10, 15, 25, 50, 100 ]}
    // SETTINGS
    paginationMode='server'
    filterMode='server'
    sortingMode='server'
    unstable_headerFilters
    initialState={{
      pinnedColumns: {
        right: [ 'actions' ]
      }
    }}
    disableColumnReorder
    {...props}
    className={className}
  />
))(({ theme }) => ({
  border: 'none',
  fontSize: 14,
  color: theme.palette.text.primary,

  // HEADER
  '& .MuiDataGrid-row--borderBottom': {
    background: `${theme.palette.common.white} !important`
  },
  '& .MuiDataGrid-columnHeader:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none'
  },
  '& .MuiDataGrid-sortIcon': {
    color: theme.palette.primary.main
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    padding: 0
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 600,
    textTransform: 'unset'
  },
  '& .MuiDataGrid-pinnedColumnHeaders': {
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none'
  },

  // PINNED COLUMNS
  '& .MuiDataGrid-pinnedColumns': {
    boxShadow: 'none',
    backgroundColor: 'unset',
    '& .MuiDataGrid-cell': {
      padding: 0
    }
  },
  '[data-field="actions"] > *': {
    display: 'none'
  },
  '.MuiDataGrid-row.Mui-hovered [data-field="actions"] > *': {
    display: 'flex'
  },

  // ROW
  '& .MuiDataGrid-row:hover': {
    backgroundColor: selectedPrimaryMainColor
  },
  '& .MuiDataGrid-row.Mui-hovered': {
    backgroundColor: selectedPrimaryMainColor
  },
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: selectedPrimaryMainColor
  },
  '& .MuiDataGrid-row.Mui-selected:hover': {
    backgroundColor: selectedPrimaryMainColor
  },
  '& .MuiDataGrid-row.Mui-selected.Mui-hovered': {
    backgroundColor: selectedPrimaryMainColor
  },

  // CELL
  '& .MuiDataGrid-cell:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none'
  },

  // PAGINATION
  '& .MuiTablePagination-selectLabel': {
    fontSize: 14
  },
  '& .MuiTablePagination-select': {
    fontSize: 14
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: 14
  },
  '& .MuiIconButton-root': {
    padding: 8
  },

  // FOOTER
  '& .MuiDataGrid-selectedRowCount': {
    paddingLeft: '16px !important'
  }
}))

export default StyledDataGrid