import React, { useState, useEffect } from "react";
import "./Hero.css";
import rightarrow from "../../assets/arrow-right.png";
import rightgreen from "../../assets/arrow-green.png";
import Grazac from "../../assets/Grazac.png";
import Afex from "../../assets/Afex.png";
import Ogun from "../../assets/Ogun.png";
import Technomy from "../../assets/Technomy.png";
import Daily from "../../assets/Ogun-daily.png";

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date("2024-10-29T12:00:00.000Z"); // replace with your target date

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        // countdown finished
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

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
          <button className="register-2">
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
          {/* <div className="sponsor-img">
            <img src={Grazac} alt="Grazac" className="moving-img" />

            <img src={Afex} alt="Afex" className="moving-img" />

            <img src={Ogun} alt="Ogun" className="moving-img" />

            <img src={Technomy} alt="Technomy" className="moving-img" />

            <img src={Daily} alt="Daily" className="moving-img" />
          </div> */}
        </div>
      </div>

      <div className="header-bottom-section">
        <div className="background-div"></div>
        <div className="countdown">
          <div className="countdown-div">
            <div className="days">
              <p className="number">{days.toString().padStart(2, "0")}</p>
              <p className="days-text">DAYS</p>
            </div>

            <div className="days">
              <p className="number">{hours.toString().padStart(2, "0")}</p>
              <p className="days-text">HRS</p>
            </div>

            <div className="days">
              <p className="number">{minutes.toString().padStart(2, "0")}</p>
              <p className="days-text">MINS</p>
            </div>

            <div className="days">
              <p className="number">{seconds.toString().padStart(2, "0")}</p>
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
