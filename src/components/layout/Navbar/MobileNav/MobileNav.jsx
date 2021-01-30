import React from 'react'
import './MobileNav.scss'

export default function MobileNav() {
    {console.log('im open')}
    return (
        <div className="mobile-menu">
            <ul className="mobile-nav-list">
              <li><a href="#" className="login-menu-text">Login</a></li>
              <li><a href="#" className="signup-menu-text">Sign Up</a></li>
          </ul>
        </div>
    )
}
