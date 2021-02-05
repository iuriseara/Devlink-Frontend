import React, { useState } from 'react'
import './Login.scss'
import logo from './../../../img/logo/logo-black.svg'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../../actions/auth'
import Alert from '../../layout/Alert/Alert'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password } = formData;

    const changeHandler = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = async e => {
        e.preventDefault();
        login(email, password)
    }

    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
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

                    <Alert/>

                    <button type="submit" className="login-modal-btn">Login</button>
                    
                    <p className='login-text'>Don't have an account? 
                        <Link to='/register' className="signup-text"><span> Sign Up</span></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)