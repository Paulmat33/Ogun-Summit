import "./Footer.css";
import logo from "../../assets/footer-logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import gmail from "../../assets/gmail.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-color"></div>
      <div className="footer container">
        <div className="footer-logo">
          <div>
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="footer-links">
            <li>About</li>
            <li>Sponsors</li>
            <li>Store</li>
            <li>Exhibitors</li>
          </div>
        </div>
        <div className="footer-social-div">
          <div className="footer-social">
            <div>
              <img src={instagram} alt="instagram" />
            </div>
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <div>
              <img src={gmail} alt="gmail" />
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2022 Ogun Digital Summit. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
