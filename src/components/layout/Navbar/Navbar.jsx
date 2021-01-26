import React from 'react'
import './Navbar.scss';
import logo from '../../../img/logo/logo-black.svg'
import menuIcon from '../../../img/icons/menu.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
          <a href="#"><img className="nav-logo" src={logo}/></a>
          <ul className="nav-list">
              <li><button className="login-btn">Login</button></li>
              <li><button className="signup-btn">Sign Up</button></li>
          </ul>
          <a href="#" className='menu-icon'><img className="menu-icon" src={menuIcon}/></a>
        </nav>
    )
}
