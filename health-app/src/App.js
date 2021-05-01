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
          <div className="footer-container">
            <footer>
                  <div className="navigation-footer">
                    <div className="navLink">
                    <Link style ={{textDecoration: 'None'}} to="/"><p>Home</p></Link>
                  </div>
                  <div className="navLink">
                    <Link style ={{textDecoration: 'None'}} to="/About"><p>About</p></Link>
                  </div>
                  <div className="navLink">
                    <button className="Logout__button-footer" onClick={() => fire.auth().signOut()}>Log Out</button>
                  </div>
                  <div id="edamam-badge" data-color="white"></div>
                </div>
                <span>&copy; Copyright {(new Date().getFullYear())} Health App</span>
                <br/>
                <br/>
                <br/>
            </footer>
      </div>  
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
