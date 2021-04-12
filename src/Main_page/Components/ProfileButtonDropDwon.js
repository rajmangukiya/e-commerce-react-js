import React from 'react'
import LoginButton from './LoginButton'

function ProfileButtonDropDwon() {
  return (
    <div className="ProfileButtonDropDown">
      <LoginButton />
      <div className="DropOption SellPage">Switch to Selling</div>
      <div className="DropOption DeliveryPage">Switch to Delivery</div>
    </div>
  )
}

export default ProfileButtonDropDwon
