import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar'
import Landing from './components/layout/LandingPage/Landing'
import Login from './components/auth/Login/Login'
import Register from './components/auth/Register/Register'
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Landing } />
   
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </Switch>
      
      </Fragment>
    </Router>
  );
}

export default App;
