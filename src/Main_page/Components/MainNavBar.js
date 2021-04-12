import React from 'react'
import Cart from './Cart'
import ProfileButton from './ProfileButton'
import SearchBar from './SearchBar'

function MainNavBar() {
  return (
    <div className="MainNavBar">
      <div className="Logo">
        <p>CwU</p>
      </div>
      <SearchBar />
      <ProfileButton />
      <Cart />
    </div>
  )
}

export default MainNavBar
