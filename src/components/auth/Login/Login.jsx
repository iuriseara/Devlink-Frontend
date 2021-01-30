import React from 'react'
import './Login.scss'
import logo from './../../../img/logo/logo-black.svg'

export default function Login() {
    return (
        <div className="login-modal">
            <div className="login-wrapper">
                
                <div className='login-form'>
                    <img src={logo} alt="logo" className="login-logo"/>
                    <h1 className="login-title">Login</h1>
                    {/* <label>Email</label><br/> */}
                    <input className="email-input" type="text" name="username" placeholder="E-Mail"/><br/>
                
                    {/* <label>Password</label><br/> */}
                    <input className="password-input" type="password" name="password" placeholder="Password"/><br/>
                
                    <button type="submit" className="login-modal-btn">Login</button>
                </div>
            </div>
        </div>
    )
}
