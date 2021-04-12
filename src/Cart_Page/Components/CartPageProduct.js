import React from 'react'

function CartPageProduct(props) {

  const { cartProduct } = props

  return (
    <div className="CartPageProduct">
      <div className="CartPageProductFirst">
        <img src={cartProduct.image} alt={cartProduct.title}/>
      </div>
      <div className="CartPageProductSecond">
        <div className="CartPageProductCategory">
          {cartProduct.category}
        </div>
        <div className="CartPageProductTitle">
          {cartProduct.title}
        </div>
        <div className="CartPageProductPrice">
          Rs. {cartProduct.price * 100}
        </div>
        <div className="CartPageProductRemoveButton">Remove</div>
      </div>
    </div>
  )
}

export default CartPageProduct
