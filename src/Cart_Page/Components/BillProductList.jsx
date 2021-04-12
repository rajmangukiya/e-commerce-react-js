import React from 'react'

function BillProductList(props) {

  const { product } = props

  return (
    <div className="BillProductList">
      <li>{product.category}</li>
      <li>Rs. {product.price * 100}</li>
    </div>
  )
}

export default BillProductList
