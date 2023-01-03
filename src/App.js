import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
      <Router>
          <Route exact component={Home} path="/" />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup} />
      </Router>
  );
}

export default App;
