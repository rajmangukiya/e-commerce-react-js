import './LoginPage.css'
import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="form">
        <h1>Login</h1>
        <form action="#">
          <div className="field">
            <div className="icon icon-email"></div>
            <input type="email" name="email" placeholder="Email" autocomplete="off"></input>
          </div>
          <div className="field">
            <div className="icon icon-password"></div>
            <input type="password" name="password" placeholder="Password"></input>
          </div>
          <input type="submit" value="Login"></input>
        </form>
        <p>Or login with</p>
        <div className="option-google">
          <div className="google-image"></div>
        </div>
        <p1>Not a member? 
          <Link to="/signUpPage">
            <span>Sign up now</span>
          </Link>
        </p1>
      </div>      
    </div>
  )
}

export default LoginPage
