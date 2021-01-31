import React, { Component } from 'react'
import './MobileNav.scss'
import closeMenu from '../../../../img/icons/close.svg'
import { Link } from 'react-router-dom'

export default class MobileNav extends Component {
    render() {
        return (
                <div className="mobile-menu">
                <ul className="mobile-nav-list">
                <Link to='/login' className="login-menu-text" onClick={this.props.toggle}><li>Login</li></Link>
                <Link to='/register' className="signup-menu-text" onClick={this.props.toggle}><li>Sign Up</li></Link>
                <li><a href="#" className="blog-menu-text">Blog</a></li>
                <li><a href="#" className="contact-menu-text">Contact</a></li>
                <li><img className="close-menu-icon" src={closeMenu} alt="close-menu" onClick={this.props.toggle}/></li>
            </ul>

            </div>
        )
    }
}

