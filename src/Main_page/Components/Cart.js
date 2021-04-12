import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WholeContext } from '../../App'

function Cart() {

  const wholeState = useContext(WholeContext)
  
  return (
    <Link to="/cartPage" className="Cart">
      <div className="CartImage"></div>
      <div className="OrderNumber">{wholeState.cartValue}</div>
    </Link>
  )
}

export default Cart
