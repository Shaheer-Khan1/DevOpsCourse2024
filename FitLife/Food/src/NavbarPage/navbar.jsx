import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FitLife</h1>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <button onClick={() => navigate('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate('/bmi-calculator')}>BMI Calculator</button>
        </li>
        <li>
          <button onClick={() => navigate('/surplus-calculator')}>Surplus Calculator</button>
        </li>
        <li>
          <button onClick={() => navigate('/deficit-calculator')}>Deficit Calculator</button>
        </li>
        <li>
          <button onClick={() => navigate('/diet-options')}>Diet Options</button>
        </li>
        <li>
          <button onClick={() => navigate('/fat-percentage')}>Fat Percentage</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
