import React from 'react'

function CartPageAddress() {
  return (
    <form className="CartPageAddress">
      <input type="text" name="name" id="name" placeholder="Name*" required autoComplete="off"></input>
      <input type="text" name="phone" id="phone" pattern="[0-9]{10}" maxLength="10" placeholder="Mobile No*" required autoComplete="off"></input>
      <input type="text" name="address" id="address" placeholder="Address*" required autoComplete="off"></input>
      <input type="text" name="state" id="state" placeholder="State*" required autoComplete="off"></input>
      <input type="text" name="city" id="city" placeholder="City*" required autoComplete="off"></input>
      <input type="text" name="pincode" pattern="[0-9]{6}" maxLength="6" placeholder="Pin Code*" required autoComplete="off"></input>
      <input className="CartPageAddressSubmit" id="submit" type="submit" value="submit" autoComplete="off"></input>
    </form>
  )
}

export default CartPageAddress
