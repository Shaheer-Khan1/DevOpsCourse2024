import React from 'react';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       

        <section className="footer-section">
          <h3 className="footer-subHeading">Contact Us for Web Dev</h3>
          <p>Email: <a href="mailto:shaheeriskhan@yahoo.com">shaheeriskhan@yahoo.com</a></p>
        </section>

        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FitLife. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
