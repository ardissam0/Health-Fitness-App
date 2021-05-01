import React from 'react';
import fire from "../config/fire";
import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
      event.preventDefault();
      setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="navigation">
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/"><p>HOME</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/About"><p>About</p></Link>
        </div>
        <div className="navLink">
          <button className="Logout__button" onClick={() => fire.auth().signOut()}>Log Out</button>
        </div>
        <div className="dark-mode__container">
                  <span className="light__symbol">☀︎</span>
                    <div className='dark-mode__toggle'>
                        <div 
                        onClick={toggleMode} 
                        className={darkMode ? 'toggle toggled' : 'toggle'} 
                        />
                     </div>
                <span className="dark__symbol">☾</span>
            </div>
      </div>
    </div>
  );
};

export default Navigation;