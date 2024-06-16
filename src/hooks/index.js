import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContex'
import { UseProvider } from './UserContex'

const AppProvider = ({ children }) => (
  <CartProvider>
    <UseProvider>{children}</UseProvider>
  </CartProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
