import React from 'react';
import fire from "../config/fire";
import { Link } from 'react-router-dom';
import { useUser } from "../hooks";
import useDarkMode from '../hooks/useDarkMode';

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
      event.preventDefault();
      setDarkMode(!darkMode);
  };

  const user = useUser();

  return (
    <div>
      <div className="navigation">
      {user?.profile}
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/"><p>HOME</p></Link>
        </div>
        {/* <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/US"><p>United States</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/Weather"><p>Weather</p></Link>
        </div> */}
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