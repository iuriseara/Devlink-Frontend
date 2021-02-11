import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Facebook from '../../img/logo/socialmedia/facebook.svg';
import Instagram from '../../img/logo/socialmedia/instagram.svg';
import Twitter from '../../img/logo/socialmedia/twitter.svg';
import Youtube from '../../img/logo/socialmedia/youtube.svg';
import Linkedin from '../../img/logo/socialmedia/linkedin.svg';

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bit: '',
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

            <h1>Edit Your Profile</h1>
            <p>Add some changes to your profile</p>


            <form className="create-profile-form">
                <select name='status' onChange={onChange}>
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

            <br/>

            <small className="form-text">Give us an idea of where you are at in your career</small>

            <br/>

          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />

        <br/>

        <small className="form-text">Could be your own company or one you work for</small>
        
        <br/>

        <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
        />

        <br/>

        <small className="form-text">Could be your own or a company website</small>       

        <br/>

        <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
        />

        <br/>

        <small className="form-text">City & state suggested (eg. Boston, MA)</small>

        <br/>

        <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
        />

        <br/>

        <small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>

        <br/>

        <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
        />

        <br/>

        <small className="form-text">If you want your latest repos and a Github link, include your username</small>

        <br/>

        <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
        />

        <br/>

        <small className="form-text">Tell us a little about yourself</small>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <img src={Twitter} className="twitter-icon" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <img src={Facebook} className="facebook-icon" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <img src={Youtube} className="youtube-icon" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <img src={Linkedin} className="linkedin-icon" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <img src={Instagram} className="instagram-icon" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="create-profile-submit-btn" />
        <Link className="go-back-btn" to="/dashboard">Go Back</Link>


        </form>

        </div>
    );
};


CreateProfile.propTypes = {

};


export default CreateProfile;
