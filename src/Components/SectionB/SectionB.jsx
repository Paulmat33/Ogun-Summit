import "./SectionB.css";
import video from "../../assets/Video.png";
import fire from "../../assets/fire.png";

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
        {/* <video src="https://ogunsummit.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-20-at-11.57.50-PM-1-1024x576.png" controls autoPlay muted loop></video> */}
        <img src={video} alt="video" />
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
      </div>
    </div>
  );
};

export default SectionB;
