import React, { useContext } from 'react'
import { UserContext } from './MainPage'

function SearchBar() {

  const mainState = useContext(UserContext)

  const handleSearchInput = (e) => {
    mainState.setSearchInput(e.target.value)
  }

  const handleSearchButton = () => {
    mainState.setFilteredProducts(
        mainState.products.filter((product) => {
      return product.title.toLowerCase().includes(mainState.searchInput.toLowerCase())
    }))
    
    mainState.setSearchInput('')
  }

  const handleCategory = (e) => {
    mainState.setCategory(e.target.value)
  }

  return (
    <div className="SearchBar">
      <select onChange={(e) => handleCategory(e)} name="category" id="category">
        <option value="all">All</option>
        <option value="men clothing">Men Clothing</option>
        <option value="women clothing">Women Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <input onChange={handleSearchInput} type="text" value={mainState.searchInput} placeholder="Search"/>
      <button onClick={handleSearchButton}>
        <div className="SearchImage"></div>
        <p>Search</p>
      </button>
    </div>
  )
}

export default SearchBar
