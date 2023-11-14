import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Code of Conduct</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Address</h4>
          <ul>
            <li><a href="#">Cluster Innovation Centre</a></li>
            <li><a href="#">University of Delhi</a></li>
            <li><a href="#">New Delhi</a></li>
            <li><a href="#">Made by Saswat Susmoy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          
          <nav className="menu">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
            
            <label className="menu-open-button" htmlFor="menu-open">
              <span className="lines line-1"></span>
              <span className="lines line-2"></span>
              <span className="lines line-3"></span>
            </label>

            <a href="#" className="menu-item blue"> <i className="fa-brands fa-facebook-f"></i> </a>
            <a href="#" className="menu-item green"> <i className="fa-brands fa-twitter"></i> </a>
            <a href="#" className="menu-item red"> <i className="fa-brands fa-instagram"></i> </a>
            <a href="#" className="menu-item purple"> <i className="fa-brands fa-linkedin-in"></i> </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;