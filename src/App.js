import React, {Fragment } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import Landing from './components/layout/LandingPage/Landing'
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
