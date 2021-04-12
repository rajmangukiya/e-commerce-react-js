import '../../Login_page/Components/LoginPage.css'
import React from 'react'

function SignUpPage() {
  return (
    <div className="SignUpPage">
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="form">
        <h1>Sign Up</h1>
        <form action="#">
          <div className="field">
            <div className="icon icon-name"></div>
            <input type="text" name="name" placeholder="Your Name" autocomplete="off"></input>
          </div>
          <div className="field">
            <div className="icon icon-email"></div>
            <input type="email" name="email" placeholder="Email" autocomplete="off"></input>
          </div>
          <div className="field">
            <div className="icon icon-password"></div>
            <input type="password" name="password" placeholder="New Password"></input>
          </div>
          <input type="submit" value="Sign Up"></input>
        </form>
        <p>Or Sign Up with</p>
        <div className="option-google">
          <div className="google-image"></div>
        </div>
      </div>      
    </div>
  )
}

export default SignUpPage
