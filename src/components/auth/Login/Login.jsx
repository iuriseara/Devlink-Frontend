import React from 'react'

export default function Login() {
    return (
        <div className="login-modal">
            <div className="login-wrapper">
                <h1>Login</h1>
                
                <div className='login-form'>
                    <label>Email</label><br/>
                    <input type="text" name="username" placeholder="Email"/><br/>
                
                    <label>Password</label><br/>
                    <input type="password" name="password" placeholder="Password"/><br/>
                
                    <button type="submit" className="login-modal-btn">Login</button>
                </div>
            </div>
        </div>
    )
}
