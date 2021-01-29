import React from 'react'
import './Navbar.scss';
import logo from '../../../img/logo/logo-black.svg'
import logoText from '../../../img/logo/logo-text.svg'
import menuIcon from '../../../img/icons/menu.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
          <div className='logo-wrapper'>
              <a href="#"><img className="nav-logo" src={logo}/></a>
              <a href="#"><img className="nav-logo-txt" src={logoText}/></a>
          </div>
          <ul className="nav-list">
              <li><button className="login-btn">Login</button></li>
              <li><button className="signup-btn">Sign Up</button></li>
          </ul>
          <a href="#" className='menu-icon'><img className="menu-icon" src={menuIcon}/></a>
        </nav>
    )
}
