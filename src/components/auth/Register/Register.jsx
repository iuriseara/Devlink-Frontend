import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../img/logo/logo-black.svg';
import './Register.scss';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types'
import Alert from '../../layout/Alert/Alert'



const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

    const changeHandler = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Password does not match', 'danger')
        } else {
            console.log('SUCCESS');
        }
    }

    console.log(formData)
    return (

        <div className="register-modal">
           <div className="register-wrapper">

                <img src={logo} alt="logo" className="register-logo"/>

                <h1 className="register-logo-title">Sign Up</h1>
               
                <form className='register-form' onSubmit={e => submitHandler(e) }>
                   
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="signup-name-input"
                    value={name}
                    onChange={e => changeHandler(e)}
                    required   
                    />

                    <br/>
                  
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => changeHandler(e)}
                    className="signup-email-input"
                    required     
                    />

                    <br/>
                  
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    minLength="6" 
                    value={password}
                    onChange={e => changeHandler(e)}
                    className="signup-password-input"
                    required     
                    />

                    <br/>
               
                    <input 
                    type="password" 
                    name="password2" 
                    placeholder="Confirm Password" 
                    minLength="6" 
                    value={password2}
                    onChange={e => changeHandler(e)}
                    className="signup-password-input"
                    required     
                    />

                    <br/>
               
                    <Alert />

                    <button type="submit" className="register-modal-btn">Register</button>


                    <p className='register-text'>Already have an account? 
                        <Link to='/login' className="signup-text"><span> Login</span></Link>
                    </p>
                </form>
           </div>
        </div>
    )
}


Register.prototype = {
    setAlert: PropTypes.func.isRequired
}
export default connect(null, { setAlert })(Register);