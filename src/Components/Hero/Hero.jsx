import "./Hero.css";
import rightarrow from "../../assets/arrow-right.png";
import rightgreen from "../../assets/arrow-green.png";
import Grazac from "../../assets/Grazac.png";
import Afex from "../../assets/Afex.png";
import Ogun from "../../assets/Ogun.png";
import Technomy from "../../assets/Technomy.png";
import Daily from "../../assets/Ogun-daily.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <h1>
          Innovation: <span>Pathway to our nation’s prosperity</span>
        </h1>
        <p>
          Ogun Digital Summit 2024 is focused on  improving collaborations,
          paving the way for new innovations and igniting conversation towards
          technology advancements and prosperity for Nigeria's digital
          technology ecosystem.
        </p>

        <div className="button">
          <button className="register">
            Register
            <img src={rightarrow} alt="arrow" />
          </button>
          <button className="btn2">
            Become a sponsor
            <img src={rightgreen} alt="arrow" />
          </button>
        </div>

        <div className="support">
          <h5>Proudly supported by</h5>
          <div className="sponsor-img">
            <div>
              <img src={Grazac} alt="Grazac" />
            </div>
            <div>
              <img src={Afex} alt="Afex" />
            </div>
            <div>
              <img src={Ogun} alt="Ogun" />
            </div>
            <div>
              <img src={Technomy} alt="Technomy" />
            </div>
            <div>
              <img src={Daily} alt="Daily" />
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-section">
        <div className="background-div"></div>
        <div className="countdown">
          <div className="countdown-div">
            <div className="days">
              <p className="number">83</p>
              <p className="days-text">DAYS</p>
            </div>

            <div className="days">
              <p className="number">6</p>
              <p className="days-text">HRS</p>
            </div>

            <div className="days">
              <p className="number">3</p>
              <p className="days-text">MINS</p>
            </div>

            <div className="days">
              <p className="number">3</p>
              <p className="days-text">SEC</p>
            </div>
          </div>

          <div>
            <div className="date">
              <p className="date-number">OCT 29 - NOV 1, 2024</p>
              <p className="date-text">
                June 12 cultural centre, Kuto, Abeokuta Ogun state
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
