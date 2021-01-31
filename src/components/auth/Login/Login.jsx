import React from 'react'
import './Login.scss'
import logo from './../../../img/logo/logo-black.svg'
import { Link } from 'react-router-dom'

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
                    
                    <p className='login-text'>Don't have an account? 
                        <Link to='/register' className="signup-text"><span> Sign Up</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
