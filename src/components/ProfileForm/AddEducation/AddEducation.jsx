import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../../actions/profile';
import './AddEducation.scss';
import Alert from '../../layout/Alert/Alert'

const AddEducation = ({ addEducation, history }) => {

    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    return (
        <div className='create-education'>

        <div className='create-education-wrapper'>
            
            <div className='edu-title-wrapper'>
                 <h1 className="education-form-title">Add Education</h1>
                   
                    <p className="profile-form-desc">
                    Add any school or bootcamp that you have attended 
                    </p>
            </div>
            
                <form
                    className="create-profile-form"
                    onSubmit={e => {
                    e.preventDefault();
                    addEducation(formData, history);
                    }}
                >
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School"
                        name="school"
                        value={school}
                        onChange={onChange}
                        required
                        className="school-title-input"
                    />
                    </div>
            
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value={degree}
                        onChange={onChange}
                        required
                        className="degree-input"
                    />
                    </div>
            
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="Field of Study"
                        name="fieldofstudy"
                        value={fieldofstudy}
                        onChange={onChange}
                        className="study-input"
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
                    
                        <p className='current-school'>
                            <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            className="current-school-input"
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toggleDisabled);
                            }}
                        />
                            Current School
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
                        placeholder="Program Description"
                        value={description}
                        onChange={onChange}
                        className='program-description-input'
                    />
                    </div>

                    <input type="submit" className="edu-submit-btn" />

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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(AddEducation) 
