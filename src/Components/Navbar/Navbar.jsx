import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/footer-logo.png";
import arrow from "../../assets/arrow.png";
import rightarrow from "../../assets/arrow-right.png";
import rightgreen from "../../assets/arrow-green.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="header container">
      <img src={Logo} alt="logo" className="logo-img" />

      <nav className="nav">
        <li>Home</li>
        <li className="arrow">
          About <img src={arrow} alt="arrow" />
        </li>
        <li>Sponsors</li>
        <li>Store</li>
        <li>Exhibitors</li>
      </nav>
      
      <div>
        <button className="register">
          Register
          <img src={rightarrow} alt="arrow" />
        </button>
      </div>

      <div>
        <FaBars className="bar" onClick={handleMobileNav} />
      </div>

      {/* Mobile Nav */}
      {mobileNav && (
        <div className="mobile-nav-container">
          <nav>
            <li>Home</li>
            <li className="arrow">
              About <img src={arrow} alt="arrow" />
            </li>
            <li>Sponsors</li>
            <li>Store</li>
            <li>Exhibitors</li>

            <div className="sm-btn">
              <button className="sm-register-2">
                Register
                <img src={rightarrow} alt="arrow" />
              </button>
              <button className="sm-btn2">
                Become a sponsor
                <img src={rightgreen} alt="arrow" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
