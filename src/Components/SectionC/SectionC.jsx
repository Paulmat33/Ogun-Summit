import "./SectionC.css";
import Group from "../../assets/Group-1.png";
import Group2 from "../../assets/Group-2.png";
import rightarrow from "../../assets/arrow-right.png";

const SectionC = () => {
  return (
    <div className="sectionC container">
      <div className="showcase">
        <img src={Group} alt="Group" />
        <div className="showcase-text">
          <h2>
            Would you like to showcase your startup or business to over 5,000
            participants?
          </h2>
          <p>
            Increase your start visibility and reach by booking a boot with us
            today
          </p>
          <button className="register">
            Become an exhibitor
            <img src={rightarrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="showcase-2">
        <div className="showcase-text">
          <h2>
            Take a Masterclass session during Ogun Digital Summit 2024 and make
            a real impact.
          </h2>
          <p>
            Join our masterclass trainers to help us train young individuals at
            ODS. It’s free and we don’t charge anyone for this.
          </p>
          <button className="register">
            Apply to conduct a masterclass
            <img src={rightarrow} alt="arrow" />
          </button>
        </div>
        <img src={Group2} alt="Group" />
      </div>

      <div className="schedule">
        <h1>Schedule of event</h1>
        <p>Get to know our agenda to help you plan ahead for this year</p>
      </div>

      <div className="tab">
        <button className="btn1">Conference days</button>
        <p className="off-conference">Off conference</p>
        <p className="all">All</p>
      </div>

      <div className="event">
        <div className="event-2">
          <div className="event-date">
            <h5>Wednesday</h5>
            <p>30th October</p>
          </div>

          <div>
            <div className="confrence-day">
              <h5>Conference Day 1</h5>
            </div>
            <div className="agenda-list">
              <p>Art and Culture</p>
              <p>Entertainment Industry</p>
              <p>Creative Economy</p>
              <p>Cultural and Art Exhibition</p>
              <p>Outdoor Party</p>
              <p>Demos</p>
            </div>
          </div>
        </div>

        <div className="event-2">
          <div className="event-date">
            <h5>Thursday</h5>
            <p>31st October</p>
          </div>

          <div>
            <div className="confrence-day">
              <h5>Conference Day 2</h5>
            </div>
            <div className="agenda-list">
              <p>Funding for Business/Startup</p>
              <p>Technology and Mental Health</p>
              <p>Blockchain Opportunity for Africa</p>
              <p>Think Local: Go Global</p>
              <p>Free Masterclass Sessions</p>
              <p>Announcement of Winners for Startup Competition</p>
              <p>Demos from Partners</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SectionC;
