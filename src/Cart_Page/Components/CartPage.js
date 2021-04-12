import './CartPage.css'
import React from 'react'
import { Link } from 'react-router-dom'
import BackHomeButton from '../../Main_page/Components/BackHomeButton'
import CartPageProducts from './CartPageProducts'
import CartPageBill from './CartPageBill'
import CartPageAddress from './CartPageAddress'

function CartPage() {
  return (
    <div className="CartPage">
      <div className="CartPageNavBar">
        <BackHomeButton />
      </div>
      <CartPageProducts />
      <CartPageAddress />
      <CartPageBill />
    </div>
  )
}

export default CartPage
