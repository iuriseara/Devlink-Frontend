import React, { useState } from 'react'
import './Login.scss'
import logo from './../../../img/logo/logo-black.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password } = formData;

    const changeHandler = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = async e => {
        e.preventDefault();
        console.log('SUCCESS')
    }

    console.log(formData)
    return (
        <div className="login-modal">
            <div className="login-wrapper">
                
                <form className='login-form' onSubmit={e => submitHandler(e)}>
                    <img src={logo} alt="logo" className="login-logo"/>
                    <h1 className="login-title">Login</h1>
                    
                    <input 
                    className="email-input" 
                    type="text" 
                    name="email" 
                    placeholder="E-Mail"
                    value={email}
                    onChange={e => changeHandler(e)}
                    required />

                    <br/>
                
                  
                    <input 
                    className="password-input" 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e => changeHandler(e)}
                    required />

                    <br/>
                
                    <button type="submit" className="login-modal-btn">Login</button>
                    
                    <p className='login-text'>Don't have an account? 
                        <Link to='/register' className="signup-text"><span> Sign Up</span></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
