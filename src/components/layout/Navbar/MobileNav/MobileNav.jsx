import React, { useState, Fragment } from 'react'
import './MobileNav.scss'
import closeMenu from '../../../../img/icons/close.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../actions/auth'

const MobileNav = (props, { auth: isAuthenticated, loading }, logout ) => {

    console.log(props)

    const authLinks = (
        <ul className="mobile-nav-list">
            <li><a href="#" onClick={props.logout} className="logout-btn">Logout</a></li>
            <li><a href="#" className="blog-menu-text">Blog</a></li>
            <li><a href="#" className="contact-menu-text">Contact</a></li>
            <li><img className="close-menu-icon" src={closeMenu} alt="close-menu" onClick={props.toggle}/></li>
         </ul>
    );

    const guestLinks = (
        <ul className="mobile-nav-list">
            <Link to='/login' className="login-menu-text" onClick={props.toggle}><li>Login</li></Link>
            <Link to='/register' className="signup-menu-text" onClick={props.toggle}><li>Sign Up</li></Link>
            <li><a href="#" className="blog-menu-text">Blog</a></li>
            <li><a href="#" className="contact-menu-text">Contact</a></li>
            <li><img className="close-menu-icon" src={closeMenu} alt="close-menu" onClick={props.toggle}/></li>
        </ul>
    )


        return (
            <div className="mobile-menu">
                { !loading && (<Fragment>{ props.auth.isAuthenticated ? authLinks : guestLinks }</Fragment>)}

            </div>
        )
}

MobileNav.propTypes = {
    logout: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(MobileNav);