import './ProductPage.css'
import React, { useState } from 'react'
import ProductView from './ProductView'
import { Link } from 'react-router-dom'
import Cart from '../../Main_page/Components/Cart'
import BackHomeButton from '../../Main_page/Components/BackHomeButton'

export const ProductPageContext = React.createContext()

function ProductPage(props) {

  return (
    <div className="ProductPage">
      <div className="ProductNavBar">
        <BackHomeButton />
        <Cart />
      </div>
      <ProductView />
    </div>
  )
}

export default ProductPage
