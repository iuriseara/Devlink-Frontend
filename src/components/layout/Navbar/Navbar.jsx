import React, { useState, Fragment } from 'react'
import './Navbar.scss';
import logo from '../../../img/logo/logo-black.svg'
import logoText from '../../../img/logo/logo-text.svg'
import menuIcon from '../../../img/icons/menu.svg'
import MobileNav from './MobileNav/MobileNav'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <MobileNav open={open}/>
            
            <nav className="navbar">
            <div className='logo-wrapper'>
                <a href="#"><img className="nav-logo" src={logo}/></a>
                <a href="#"><img className="nav-logo-txt" src={logoText}/></a>
            </div>
            <ul className="nav-list">
                <li><button className="login-btn">Login</button></li>
                <li><button className="signup-btn">Sign Up</button></li>
            </ul>
            <a href="#" className='menu-icon'><img className="menu-icon" onClick={() => setOpen(!open)} src={menuIcon}/></a>
            </nav>

            
        </Fragment>
    )
}
