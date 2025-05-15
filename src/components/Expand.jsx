// import "./expand.css";
import "./expand.css";

import { useState, useEffect } from "react";
import Company from "../images/icon-expand (1).svg";
import Investment from "../images/icon-expand (2).svg";
import Community from "../images/icon-expand (3).svg";
import Sector from "../images/icon-expand (4).svg";

const Expand = () => {
  const [counts, setCounts] = useState(ExpandsData.map(() => 0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const targetCount = ExpandsData[index].count;
          const increment = Math.ceil(targetCount / 300);
          return count + increment >= targetCount
            ? targetCount
            : count + increment;
        })
      );
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="expand-container">
      <div className="expand-header">
        <h2>Why Expand to UAE?</h2>
        <p>Educate the user on the advantages of doing business in UAE</p>
      </div>

      <div className="expand-scroll-wrapper">
        {ExpandsData.map((item, index) => (
          <div className="gradient-border" key={index}>
            <div className="expand-card">
              <img src={item.icon} alt="icon" className="expand-icon" />
              <h3>
                {item.prefix}
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ExpandsData = [
  {
    prefix: "",
    suffix: "+",
    count: 15000,
    icon: Company,
    description: "Company expanded to the region",
  },
  {
    prefix: "$",
    suffix: "B",
    count: 35,
    icon: Investment,
    description: "Investment Raised by Our Expansion Community",
  },
  {
    prefix: "",
    suffix: "+",
    count: 10000,
    icon: Community,
    description: "Active Community of Market Leaders in UAE",
  },
  {
    prefix: "",
    suffix: "+",
    count: 1700,
    icon: Sector,
    description: "Companies Enable Through Sector Building Programs",
  },
];

export default Expand;
