import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../../actions/profile';
import Spinner from '../../layout/Spinner/Spinner';
import DashboardActions from '../DashboardAction/DashboardAction'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import './Dashboard.scss';


const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
                <h1 className="dashboard-text">Dashboard</h1>
                <p className="dashboard-username">Welcome {user && user.name} </p>
            </div>
          {profile !== null ? (
            <Fragment>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
    
              <div className="my-2">
                <button className="btn btn-danger" onClick={() => deleteAccount()}>
                Delete My Account
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="no-profile-alert">
                  <p>You have not yet created a profile, please add some info</p>
                  <Link to="/create-profile" className="create-profile-btn">
                    Create Profile
                  </Link>
              </div>
            </Fragment>
          )}
        </div>
      );
    };

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount } )(Dashboard);
