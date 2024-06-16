import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoriesMenu,
  CategoryButton,
  ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProdructs = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProdructs)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category.id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo de products" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
