import React, { Component, Fragment } from 'react'
import './Navbar.scss';
import logo from '../../../img/logo/logo-black.svg'
import logoText from '../../../img/logo/logo-text.svg'
import menuIcon from '../../../img/icons/menu.svg'
import MobileNav from './MobileNav/MobileNav'


export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    menuPopUp = () => {
        if (this.state.isOpen === true) {
            return (<MobileNav toggle={this.toggleCollapse}/>)
        }
    }


    render() {
        
        return (
            <Fragment>
            {this.menuPopUp()}
            <nav className="navbar">
            <div className='logo-wrapper'>
                <a href="#"><img className="nav-logo" src={logo}/></a>
                <a href="#"><img className="nav-logo-txt" src={logoText}/></a>
            </div>
            <ul className="nav-list">
                <li><button className="login-btn">Login</button></li>
                <li><button className="signup-btn">Sign Up</button></li>
            </ul>
            <a href="#" className='menu-icon'><img className="menu-icon" onClick={this.toggleCollapse} src={menuIcon}/></a>
            </nav>

            
            </Fragment>
        )
    }
}

