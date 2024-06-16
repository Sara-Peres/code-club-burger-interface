import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContex'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { putProductsInCart } = useCart()
  const { push } = useHistory()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductsInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
