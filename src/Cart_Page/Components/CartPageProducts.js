import React, { useContext } from 'react'
import { WholeContext } from '../../App'
import CartPageProduct from './CartPageProduct'

function CartPageProducts() {

  const wholeState = useContext(WholeContext)

  return (
    <div className="CartPageProducts">
      {
        wholeState.cartProducts.map((cartProduct) => {
          return <CartPageProduct cartProduct={cartProduct} key={cartProduct.id} />
        })
      }
    </div>
  )
}

export default CartPageProducts
