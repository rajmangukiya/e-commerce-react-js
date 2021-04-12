import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllProducts from './AllProducts'
import MainNavBar from './MainNavBar'

export const UserContext = React.createContext()

function MainPage() {

  const [searchInput, setSearchInput] = useState('')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState('all')

// Just for use start
{
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data)
    })
  }, [])
}
// Just for use over

  useEffect(() => {
    setFilteredProducts( 
      products.filter((product) => {
        if(category === 'all')
          return true
        return category === product.category
      })
    )
  }, [category, products])

  return (
    <div className="MainPage">
      <UserContext.Provider value={{
        searchInput: searchInput,
        setSearchInput: setSearchInput,
        products: products,
        setProducts: setProducts,
        filteredProducts: filteredProducts,
        setFilteredProducts: setFilteredProducts,
        category: category,
        setCategory: setCategory
      }}>
        <MainNavBar />
        <AllProducts />
      </UserContext.Provider>
    </div>
  )
}

export default MainPage
