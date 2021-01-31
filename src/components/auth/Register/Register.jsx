import React from 'react'
import logo from './../../../img/logo/logo-black.svg'
import './Register.scss'


export default function Register() {
    return (
        <div className="register-modal">
           <div className="register-wrapper">

                <img src={logo} alt="logo" className="register-logo"/>

                <h1 className="register-logo-title">Sign Up</h1>
               
                <div className='register-form'>
                   
                    <input type="text" name="username" placeholder="Name" className="signup-name-input"/><br/>
                  
                    <input type="text" name="username" placeholder="Email" className="signup-email-input"/><br/>
                  
                    <input type="password" name="password" placeholder="Password" minLength="6" className="signup-password-input"/><br/>
               
                    <input type="password" name="password2" placeholder="Confirm Password" minLength="6" className="signup-password-input"/><br/>
               
                    <button type="submit" className="register-modal-btn">Register</button>
                </div>
           </div>
        </div>
    )
}
