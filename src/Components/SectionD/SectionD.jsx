import "./SectionD.css";
import arrow from "../../assets/arrow-right.png";
import Network from "../../assets/Network.png";
import Generate from "../../assets/Generate-Leads.png";
import Gain from "../../assets/Gain-Exposture.png";
import Innovate from "../../assets/Innovation.png";
import Top from "../../assets/Top-speakers.png";
import Insight from "../../assets/Fresh-insights.png";
import Masterclass from "../../assets/Freemaster-Class.png";
import Exploring from "../../assets/Exploring-Others.png";
import Apple from "../../assets/Apple-Store.png";
import Goggle from "../../assets/Google-Store.png";
import Frame from "../../assets/Pics-Frame.png";


const SectionD = () => {
  return (
    <div className="sectionD container">
      <div className="sectionD-heading">
        <h1>Why join us as a Sponsor?</h1>
        <p>
          With over 5,000 participants expected to grace Ogun Digital Summit
          2024, we’ve got the perfect audience for you.
        </p>

        <button className="btn3">
          Become a sponsor <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div className="sectionD-images">
        <div>
          <img src={Network} alt="Network" />
        </div>
        <div>
          <img src={Generate} alt="Generate" />
        </div>
        <div>
          <img src={Gain} alt="Gain" />
        </div>
        <div>
          <img src={Innovate} alt="Innovate" />
        </div>
      </div>

      <div className="sectionD-right-col">
        <div>
          <h1>What to look forward to for this year’s event</h1>
        </div>
        <div>
          <p>
            We’re back with the most exciting and largest technology event in
            Ogun State. It all starts here, wherever you sit in the ecosystem,
            you’ll find the insights, inspiration and connections that you need
            to thrive.
          </p>
          <button className="btn3">
            Register <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="image-2">
        <div>
          <img src={Top} alt="Top" />
        </div>
        <div>
          <img src={Insight} alt="Insight" />
        </div>
        <div>
          <img src={Masterclass} alt="Masterclass" />
        </div>
        <div>
          <img src={Exploring} alt="Exploring" />
        </div>
      </div>

      <div className="sectionD-last">
        <div className="sectionD-last-text">
          <h1>Unlocking Tech Innovations Without Boundaries</h1>
          <p>
            The ODS 24 Mobile App is your all-in-one tool for an immersive tech
            experience at your fingertip. Connect with like minds like never
            before
          </p>

          <div className="playstore">
            <div>
              <img src={Apple} alt="Apple" />
            </div>
            <div>
              <img src={Goggle} alt="Goggle" />
            </div>
          </div>
        </div>

        <img src={Frame} alt="Frame"  className="frame"/>
      </div>
    </div>
  );
};

export default SectionD;
