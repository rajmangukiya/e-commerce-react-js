import React, { useContext } from 'react'
import { WholeContext } from '../../App'

function CartPageProduct(props) {

  const { cartProduct } = props

  const wholeState = useContext(WholeContext)

  const handleCartProductRemoveButton = () => {
    wholeState.setCartProducts(
      wholeState.cartProducts.filter((product) => {
         return product.id !== cartProduct.id
      })
    )
    wholeState.setCartValue(prev => prev - 1)
  }

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
        <div onClick={handleCartProductRemoveButton} className="CartPageProductRemoveButton">Remove</div>
      </div>
    </div>
  )
}

export default CartPageProduct
