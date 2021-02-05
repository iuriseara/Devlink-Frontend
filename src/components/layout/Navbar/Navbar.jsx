import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
import logo from '../../../img/logo/logo-black.svg'
import logoText from '../../../img/logo/logo-text.svg'
import menuIcon from '../../../img/icons/menu.svg'
import MobileNav from './MobileNav/MobileNav'
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth'
import PropTypes from 'prop-types';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul className="nav-list">
            
                <li><button onClick={logout} className="signup-btn">Logout</button></li>

           
        </ul>
    );


    const guestLinks = (
        <ul className="nav-list">
            <Link to='/login'>
                <li><button className="login-btn">Login</button></li>
            </Link>
            
            <Link to='/register'>
                <li><button className="signup-btn">Sign Up</button></li>
            </Link>
        </ul>
    );



    const [isOpen, setOpen] = useState(false)


    const menuPopUp = () => {
        if (isOpen === true) {
            return (<MobileNav toggle={() => setOpen(!isOpen)}/>)
        }
    }


    console.log(isOpen)
        return (
            <Fragment>
            {menuPopUp()}
            <nav className="navbar">
            <div className='logo-wrapper'>
                <Link to='/'><img className="nav-logo" alt='logo' src={logo}/></Link>
                <Link to='/'><img className="nav-logo-txt" alt='logo-text' src={logoText}/></Link>
            </div>
            
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
           
            <img className="menu-icon" onClick={() => setOpen(!isOpen)} src={menuIcon}/>
            </nav>

            
            </Fragment>
        )
    
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);