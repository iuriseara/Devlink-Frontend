import React from 'react'

export default function Register() {
    return (
        <div className="register-modal">
           <div className="register-wrapper">
                <h1>Register</h1>
               
                <div className='register-form'>
                    <label>Name</label><br/>
                    <input type="text" name="username" placeholder="Name"/><br/>
               
                    <label>Email</label><br/>
                    <input type="text" name="username" placeholder="Email"/><br/>
               
               
                    <label>Password</label><br/>
                    <input type="password" name="password" placeholder="Password" minLength="6"/><br/>
               
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password2" placeholder="Confirm Password" minLength="6"/><br/>
               
                    <button type="submit" className="login-modal-btn">Login</button>
                </div>
           </div>
        </div>
    )
}
