import "./SectionA.css";
import arrow from "../../assets/arrow-black.png";
import Attendees from "../../assets/Attendees.png";
import Speakers from "../../assets/Speakers.png";
import Sessions from "../../assets/Sessions.png";
const SectionA = () => {
  return (
    <div className="sectionA container">
      <div className="section-A">
        <h1>Our numbers in the last 4 years.</h1>
        <p className="section-Ap">
          It all started with a dream in 2019 to bring together startup
          entrepreneurs, talents, creatives and founders with a strong focus to
          promote youth empowerment, tech entrepreneurship and social
          innovation.
        </p>
        <button className="sponsor">
          Become a sponsor <img src={arrow} alt="arrow" />{" "}
        </button>
      </div>

      <div>
        <div className="attendees">
          <img src={Attendees} alt="Attendees" />
          <img src={Speakers} alt="Speakers" />
          <img src={Sessions} alt="Sessions" />
        </div>

        <div className="attendees-number">
          <div className="attendees-number-div">
            <p className="number-plus">7200+</p>
            <p className="number-text">Attendees</p>
          </div>

          <div className="attendees-number-div">
            <p className="number-plus">50+</p>
            <p className="number-text">Speakers</p>
          </div>

          <div className="attendees-number-div">
            <p className="number-plus">30+</p>
            <p className="number-text">Sessions</p>
          </div>
        </div>


        <div className="attendees-number-sm">
          <div className="attendees-number-div2">
            <p className="number-plus1">5000+</p>
            <p className="number-text2">Attendees</p>
          </div>

          <div className="attendees-number-div2">
            <p className="number-plus1">60+</p>
            <p className="number-text2">Speakers</p>
          </div>

          <div className="attendees-number-div2">
            <p className="number-plus1">20+</p>
            <p className="number-text2">Sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
