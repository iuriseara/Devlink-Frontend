import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../actions/profile';
import './AddExperience.scss';
import Alert from '../../layout/Alert/Alert'

const AddExperience = props => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    return (
        <div className='create-experience'>

        <div className='create-experience-wrapper'>
            
            <div className='exp-title-wrapper'>
                 <h1 className="experience-form-title">Add An Experience</h1>
                   
                    <p className="profile-form-desc">
                    Add any developer/programming positions that you have had in the past
                    </p>
            </div>
            
                <form
                    className="create-profile-form"
                    onSubmit={e => {
                    // e.preventDefault();
                    // addExperience(formData, history);
                    }}
                >
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Job Title"
                        name="title"
                        value={title}
                        onChange={onChange}
                        required
                        className="job-title-input"
                    />
                    </div>
            
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Company"
                        name="company"
                        value={company}
                        onChange={onChange}
                        required
                        className="company-input"
                    />
                    </div>
            
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={location}
                        onChange={onChange}
                        className="location-input"
                    />
                    </div>

                    <div className="form-group">
                    <h4 className='from-to-date-title'>From Date</h4>
                        <input type="date" 
                            name="from" value={from} 
                            onChange={onChange} 
                            className="date-input"/>
                    </div>

                    <div className="current-job-group">
                    
                        <p className='current-job'>
                            <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            className="current-job-input"
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                            }}
                        />
                            Current Job
                        </p>
                    </div>

                    <div className="form-group">
                    <h4 className='from-to-date-title'>To Date</h4>
                    <input
                        type="date"
                        name="to"
                        value={to}
                        onChange={onChange}
                        disabled={current}
                        className="date-input"
                    />
                    </div>
                    <div className="form-group">
                    <textarea
                        name="description"
                        cols="40"
                        rows="15"
                        placeholder="Job Description"
                        value={description}
                        onChange={onChange}
                        className='job-description-input'
                    />
                    </div>
                    <input type="submit" className="exp-submit-btn" />

                    <div className='alert-section'>
                        <Alert/>
                    </div>

                    <Link className="go-back-btn" to="/dashboard">
                    Go Back
                    </Link>
                </form>
        </div>

        </div>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(AddExperience) 
