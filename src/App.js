import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar'
import Landing from './components/layout/LandingPage/Landing'
import Login from './components/auth/Login/Login'
import Register from './components/auth/Register/Register'
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import store from './store'
import setAuthToken from './utils/setAuthToken'
import './App.css'; 

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Landing } />
         
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
          </Switch>
      
      </Fragment>
    </Router>
  );
}

export default App;
