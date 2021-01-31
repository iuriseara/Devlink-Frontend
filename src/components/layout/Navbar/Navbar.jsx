import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
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
        console.log("CURRENT STATE",this.state.isOpen)
        return (
            <Fragment>
            {this.menuPopUp()}
            <nav className="navbar">
            <div className='logo-wrapper'>
                <Link to='/'><img className="nav-logo" src={logo}/></Link>
                <Link to='/'><img className="nav-logo-txt" src={logoText}/></Link>
            </div>
            <ul className="nav-list">
                <Link to='/login'>
                    <li><button className="login-btn">Login</button></li>
                </Link>
                
                <Link to='/register'>
                    <li><button className="signup-btn">Sign Up</button></li>
                </Link>
            </ul>
            <a href="#" className='menu-icon'><img className="menu-icon" onClick={this.toggleCollapse} src={menuIcon}/></a>
            </nav>

            
            </Fragment>
        )
    }
}

