import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavbarPage/navbar';
import Home from './HomePage/Home';
import BMICalculator from './BMI Calculator/bmi';
import SurplusCalculator from './Surpluss Calculator/surpluss';
import DeficitCalculator from './Deficit Calculator/deficit';
import DietOptions from './Diet Options/diet';
import FatPercentage from './Fat Percentage/fat';
import Footer from './Footer/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={styles.content}>
        <Routes>
          {/* Default route for the home page */}
          <Route path="/" element={<Home />} index />
          {/* Routing for all other pages */}
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/surplus-calculator" element={<SurplusCalculator />} />
          <Route path="/deficit-calculator" element={<DeficitCalculator />} />
          <Route path="/diet-options" element={<DietOptions />} />
          <Route path="/fat-percentage" element={<FatPercentage />} />
        </Routes>
      </div>
    </>
  );
};

const styles = {
  content: {
    paddingTop: '60px', // Adjust for fixed navbar height
    padding: '20px',
  }
};

export default App;
