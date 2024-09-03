import "./SectionB.css";
import fire from "../../assets/fire.png";
import northAmerica from "../../assets/north-america.png";
import code from "../../assets/code.png";
import rocket from "../../assets/rocket.png";

const SectionB = () => {
  return (
    <div className="sectionB container">
      <div className="sectionB-text">
        <h2>We’ve made a real impact in people’s lives.</h2>
        <p>
          Watch a glimpse of how we improved the lives of pupils in the local
          community and gave them access to ICT.
        </p>
      </div>

      <div className="sectionB-text-sm">
        <h2>We’ve made a real impact in people’s lives.</h2>
        <p>
          Watch a glimpse of how we improved the lives of pupils in the local
          community and gave them access to ICT.
        </p>
      </div>

      <div className="video">
        <iframe width="900" height="432" src="https://www.youtube.com/embed/E5Y0KjFYG2Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="sectionB-text-2">
        <h2>
          Why thousands of young individuals attend Ogun Digital Summit
          annually.
        </h2>
        <p>
          Ogun Digital Summit is the global tech ecosystem – where visionaries,
          tech talents, entrepreneurs, investors and enterprise tech leaders
          come together in the right balance to accelerate the infinite cycle of
          tech innovation.
        </p>
      </div>

      <div className="access-industry">
        <div className="sectionB-text-3">
          <img src={fire} alt="fire" />
          <h4>Access to Industry Experts</h4>
          <p>
            You can directly and indirectly learn and engage with industry
            experts, offering valuable opportunities to gain deeper insights
            into your areas of interest
          </p>
        </div>

        <div className="sectionB-text-3">
          <img src={northAmerica} alt="fire" />
          <h4>Connect and network</h4>
          <p>
          We bring together the best talents in Nigeria tech ecosystem to create opportunities for professional growth and aid collaboration and partnerships.
          </p>
        </div>

        <div className="sectionB-text-3">
          <img src={code} alt="fire" />
          <h4>Discover new technology trends</h4>
          <p>
          The world is growing at a very fast pace with new technologies like AI and blockchain having a strong effect on our daily lives. We analyze and help you on how to best adapt for these changes
          </p>
        </div>

        <div className="sectionB-text-3">
          <img src={rocket} alt="fire" />
          <h4>Have Fun and Unwind</h4>
          <p>
          Our ambience and environment provides the right avenue and space to regain motivation and energy not just to grow your talent but to innovate and create new ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
