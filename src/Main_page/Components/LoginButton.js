import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to="./loginPage" className="DropOption LoginButton">
      Login
    </Link>
  )
}

export default LoginButton
