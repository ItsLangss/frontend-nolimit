import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'

const Private = (props) => {
  const { children } = props

  return (
    <Stack height='100vh' bgcolor='background.secondary' overflow='hidden'>
      {children}
    </Stack>
  )
}

Private.propTypes = {
  children: PropTypes.node.isRequired
}

export default Private
