import PropTypes from 'prop-types'

import PrivateLayout from 'src/layouts/Private'

function Private(props) {
  const { children } = props

  return (<PrivateLayout>
    {children}
  </PrivateLayout>
  )
}

Private.propTypes = {
  children: PropTypes.node.isRequired
}

export default Private
