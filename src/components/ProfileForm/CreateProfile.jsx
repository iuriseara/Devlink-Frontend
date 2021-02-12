import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Facebook from '../../img/logo/socialmedia/facebook.svg';
import Instagram from '../../img/logo/socialmedia/instagram.svg';
import Twitter from '../../img/logo/socialmedia/twitter.svg';
import Youtube from '../../img/logo/socialmedia/youtube.svg';
import Linkedin from '../../img/logo/socialmedia/linkedin.svg';
import './CreateProfile.scss';

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
}


const CreateProfile = props => {
    
    const [formData, setFormData] = useState(initialState);

    const [displaySocialInputs, toggleSocialInputs] = useState(false);


    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram 
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    return (
        <div className="create-profile">
            <div className="create-profile-wrapper">
            
            <h1>Edit Your Profile</h1>
            <p>Add some changes to your profile</p>

            
            <small className="profile-label">Give us an idea of where you are at in your career</small>

            <form className="create-profile-form">
                <select name='status' onChange={onChange} className='pro-status'>
                    <option>* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">Student or Learning</option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                <option value="Other">Other</option>
                </select>

        <small className="profile-label">Could be your own company or one you work for</small>

          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
            className="company-input"
          />


        <small className="profile-label">Could be your own or a company website</small>       
        

        <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
            className="website-input"
        />


        <small className="profile-label">City & state suggested (eg. Boston, MA)</small>


        <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            className='location-input'
        />


        <small className="profile-label">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>


        <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
            className='skill-input'
        />


        <small className="profile-label">If you want your latest repos and a Github link, include your username</small>


        <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            className='github-input'
        />


        <small className="profile-label">Tell us a little about yourself</small>


        <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
            className='bio-input'
        />


        <div className="social-media-wrapper">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="socialmedia-btn"
          >
            Add Social Network Links
          </button>
       
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="social-input-group">
              <img src={Twitter} className="twitter-icon" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                className="twitter-input"
              />
            </div>

            <div className="social-input-group">
              <img src={Facebook} className="facebook-icon" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
                className="facebook-input"
              />
            </div>

            <div className="social-input-group">
              <img src={Youtube} className="youtube-icon" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
                className="youtube-input"
              />
            </div>

            <div className="social-input-group">
              <img src={Linkedin} className="linkedin-icon" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
                className="linkedin-input"
              />
            </div>

            <div className="social-input-group">
              <img src={Instagram} className="instagram-icon" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
                className="instagram-input"
              />
            </div>
            <span className='spacer'></span>
          </Fragment>
        )}

        <div className="form-footer-wrapper">
            <input type="submit" value='Create' className="create-profile-submit-btn" />
            <Link className="go-back-btn" to="/dashboard" className="go-back-btn">Go Back</Link>
        </div>


        </form>

         </div>
    </div>
    );
};


CreateProfile.propTypes = {

};


export default CreateProfile;
