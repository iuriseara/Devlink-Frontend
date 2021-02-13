import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardAction.scss';


const DashboardAction = () => {
    return (
        <div className="dashboard-btn">
            <Link to='/edit-profile' className="edit-profile-btn">
                Edit Profile
            </Link>

            <Link to='/add-experience' className='add-experience-btn'> 
                Add Experience
            </Link>

            <Link to='/add-education' className='add-education-btn'>
                Add Education
            </Link>


        </div>
    )
}

export default DashboardAction