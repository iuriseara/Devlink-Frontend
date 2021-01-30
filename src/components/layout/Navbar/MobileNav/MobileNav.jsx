import React, { Component } from 'react'
import './MobileNav.scss'
import closeMenu from '../../../../img/icons/close.svg'

export default class MobileNav extends Component {
    render() {
        return (
                <div className="mobile-menu">
                <ul className="mobile-nav-list">
                <li><a href="#" className="login-menu-text">Login</a></li>
                <li><a href="#" className="signup-menu-text">Sign Up</a></li>
                <li><a href="#" className="blog-menu-text">Blog</a></li>
                <li><a href="#" className="contact-menu-text">Contact</a></li>
                <li><img className="close-menu-icon" src={closeMenu} alt="close-menu" onClick={this.props.toggle}/></li>
            </ul>

            </div>
        )
    }
}

