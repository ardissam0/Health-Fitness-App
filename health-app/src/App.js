import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./providers";
import PrivateRoute from './components/PrivateRoute';
import { Link } from 'react-router-dom';
import fire from './config/fire';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";

import './CSS/App.css';

function App() {
  return (
    <div className="App__main">
    <AuthProvider>
      <Router>
      <Navigation />
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path='/About' component={About} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
        <footer>
            <span>&copy; Copyright {(new Date().getFullYear())} www.samardis.com</span>
            <div id="edamam-badge" data-color="white"></div>
        </footer>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
