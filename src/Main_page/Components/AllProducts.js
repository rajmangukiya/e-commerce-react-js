import React, { useContext } from 'react'
import { UserContext } from './MainPage'
import Product from './Product'

function AllProducts() {

  const mainState = useContext(UserContext)

  return (
    <div className="AllProducts">
      {
        mainState.filteredProducts.map((product) => {
          return <Product product={product} key={product.id}/>
        })
      }
    </div>
  )
}

export default AllProducts
