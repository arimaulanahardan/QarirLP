import "./advantages.css";

import API from "../images/icon (1).svg";
import Online from "../images/icon (2).svg";
import Budgetting from "../images/icon (3).svg";
import Onboarding from "../images/icon (4).svg";

const Advantages = () => (
  <section className="advantages">
    <div className="advantages-intro">
      <h2 className="advantages-title">Services You Will Get</h2>
      <p className="advantages-info">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
      </p>
    </div>
    <div className="advantages-container">
      {advantagesData.map((advantage) => (
        <div className="advantage" key={advantage.title}>
          <img src={advantage.icon} alt={advantage.title} />
          <h2 className="advantage-title">{advantage.title}</h2>
          <p className="advantages-info">{advantage.description}</p>
        </div>
      ))}
    </div>
  </section>
);
const advantagesData = [
  {
    title: "Business Setup",
    icon: Online,
    description:
      "Comprehensive and clear plan to successfully launch and grow your business in the UAE",
  },
  {
    title: "Market Entry Strategy", 
    icon: Budgetting,
    description:
      "Effective go-to-market strategy to ensure your business competes and thrives in the UAE market",
  },
  {
    title: "Talent Hiring Support",
    icon: Onboarding, 
    description:
      "Support in recruiting the best local talent with competitive salaries to drive your business growth",
  },
  {
    title: "90 days money back gurantee",
    icon: API,
    description: 
      "Full refund guarantee within 90 days if your business doesn't show significant growth",
  },
];

export default Advantages;
