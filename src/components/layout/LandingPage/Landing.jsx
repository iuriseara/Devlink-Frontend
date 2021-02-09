import React from 'react';
import './Landing.scss';
import logoText from '../../../img/logo/logo-text.svg';
import landingGfx from '../../../img/icons/landing-page-img.svg';
import Modal from '../../auth/Login/Login'
import { Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }


    return (
        <div className='landing-page'>

            <div className="text-wrapper">
                <img src={logoText} className="logo-text"/>
                <h1 className='landing-header-text'>The First Social Media Platform built by Developers. For Developers.</h1>
                <Link to='/register'><button className='landing-signup-btn'>Sign Up</button></Link>
            </div>

            <div className="right-wrapper">
                {/* <span className='glass'></span>
                <span className='glass-circle'></span> */}
                <img src={landingGfx} class='landing-gfx'/>
            </div>


        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps)(Landing);
