import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'

function ProfileButtonDropDwon() {
  return (
    <div className="ProfileButtonDropDown">
      <LoginButton />
      <Link to="/sellingPage" className="DropOption SellPage">Switch to Selling</Link>
      <div className="DropOption DeliveryPage">Switch to Delivery</div>
    </div>
  )
}

export default ProfileButtonDropDwon
