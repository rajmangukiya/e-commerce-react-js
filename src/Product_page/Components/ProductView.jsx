import React, { useContext } from 'react'
import { WholeContext } from '../../App'

function ProductView() {

  const wholeState = useContext(WholeContext)

  const handleAddCartButton = () => {
    wholeState.setCartValue(prev => prev + 1)
    wholeState.setCartProducts([...wholeState.cartProducts, wholeState.productOnView])
  }

  return (
    <div className="ProductView">
      <div className="ProductViewImagePart">
        <img className="ProductViewImage" src={wholeState.productOnView.image} alt={`${wholeState.productOnView.title}`}/>
        <div ></div>
        <img className="ProductViewImage" src={wholeState.productOnView.image} alt={`${wholeState.productOnView.title}`}/>
        <div ></div>
        <img className="ProductViewImage" src={wholeState.productOnView.image} alt={`${wholeState.productOnView.title}`}/>
        <div ></div>
        <img className="ProductViewImage" src={wholeState.productOnView.image} alt={`${wholeState.productOnView.title}`}/>
        <div ></div>
      </div>
      <div className="ProductViewTextPart">
        <div className="ProductViewCategory">{wholeState.productOnView.category}</div>
        <div className="ProductViewTitle">{wholeState.productOnView.title}</div>
        <div className="ProductViewPrice">Rs. {wholeState.productOnView.price * 100}</div>
        <button onClick={handleAddCartButton} className="ProductViewButton">Add to cart</button>
        <div className="ProductViewDescription">
          <span>Description</span>
          <br></br>
          {wholeState.productOnView.description}
        </div>
      </div>
    </div>
  )
}

export default ProductView
