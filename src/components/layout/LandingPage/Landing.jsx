import React from 'react';
import './Landing.scss';
import logoText from '../../../img/logo/logo-text.svg';
import landingGfx from '../../../img/icons/landing-page-img.svg';

export default function Landing() {
    return (
        <div className='landing-page'>
            <div className="text-wrapper">
                <img src={logoText} className="logo-text"/>
                <h1 className='landing-header-text'>The First Social Media Platform built by Developers. For Developers.</h1>
                <button className='landing-signup-btn'>Sign Up</button>
            </div>

            <div className="right-wrapper">
                {/* <span className='glass'></span>
                <span className='glass-circle'></span> */}
                <img src={landingGfx} class='landing-gfx'/>
            </div>

        </div>
    )
}
