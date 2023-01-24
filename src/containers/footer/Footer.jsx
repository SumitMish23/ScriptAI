import React from "react";
import "./footer.css";

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-text">
        <h1>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer-links">
        <div className="logo">
          <img src="" alt="" srcset="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="http://">Overons</a>
            </li>
            <li>
              <a href="http://">Social Media</a>
            </li>
            <li>
              <a href="http://">Counters</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          </ul>
        </div>
        <div className="company">
        <ul>
            <li>
              <a href="http://">Company</a>
            </li>
            <li>
              <a href="http://">Terms & Conditions</a>
            </li>
            <li>
              <a href="http://">Privacy Policy</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          </ul>
        </div>
        <div className="contacts">
        <ul>
            <li>
              <a href="http://">Get in touch</a>
            </li>
            <li>
              <a href="http://">Crechterwoord K12 182 DK Alknjkcb</a>
            </li>
            <li>
              <a href="http://">085-132567</a>
            </li>
            <li>
              <a href="http://">info@payme.net</a>
            </li>
          </ul>

        </div>
      </div>


      <div className="copyright-section">
        <p>© Copyright Reserved {year}. Sumit Mishra</p>
      </div>
    </div>
  );
};

export default Footer;
