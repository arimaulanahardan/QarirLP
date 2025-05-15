import "./footer.css";

import Logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-half">
        <div className="logo-media">
          <span className="footer-logo">
            <img src={Logo} alt="Easybank Logo" />
          </span>
          <div>
            <img src={facebookIcon} alt="" />
            <img src={youtubeIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={pinterestIcon} alt="" />
            <img src={instagramIcon} alt="" />
          </div>
        </div>
        <ul className="left-ul">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <ul className="right-ul">
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="credits">
        <button className="request">Book a Free Consultation</button>
        <p>&#169; QarirGen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
