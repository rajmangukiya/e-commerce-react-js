import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WholeContext } from '../../App'
import { UserContext } from './MainPage'

function Product(props) {

  const { product } = props
  const mainState = useContext(UserContext)
  const wholeState = useContext(WholeContext)

  const handleProductClick = () => {
    wholeState.setProductOnView(product)
  }

  return (
    <Link onClick={handleProductClick} to="/productPage" className="Product">
      <div className="ProductImage">
        <img src={product.image} alt="product"/>
      </div>
      <div className="ProductCategory">
        {product.category}
      </div>
      <pre className="ProductTitle">{product.title}</pre>
      <div className="ProductPrice">
        Rs. {product.price * 100}
      </div>
    </Link>
  )
}

export default Product
