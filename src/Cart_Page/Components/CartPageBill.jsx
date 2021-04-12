import React, { useContext } from 'react'
import { WholeContext } from '../../App'
import BillProductList from './BillProductList'

function CartPageBill() {

  const wholeState = useContext(WholeContext)

  const handlePlaceOrderButton = () => {
    document.querySelector('.CartPageAddressSubmit').click()
  }

  return (
    <div className="CartPageBill">
      {wholeState.cartProducts.map((product) => {
        return <BillProductList key={product.id} product={product} />
      })}
      <div className="CartPageBillLine"></div>
      <div className="CartPageBillTotal">
        <p>Total</p>
        <p>Rs. {
        wholeState.cartProducts
        .map(product => product.price * 100)
        .reduce((total, one) => total + one) 
        }</p>
      </div>
      <div onClick={handlePlaceOrderButton} className="CartPageBillPlaceOrderButton">PLACE ORDER</div>
    </div>
  )
}

export default CartPageBill
