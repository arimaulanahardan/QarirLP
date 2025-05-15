import "./details.css";
import petik from "../images/petik.svg";

const Details = () => {
  return (
    <section className="details">
      <div className="details-content">
        <h1 className="details-title">WHO WE ARE</h1>
        <img src={petik} alt="Petik" className="details-petik" />
        <p className="details-info">
          <strong>We are a leading digital marketing consulting agency</strong>{" "}
          based in Indonesia, committed to helping local businesses go global.
          Through strong partnerships with{" "}
          <strong>top-tier legal agencies</strong> and{" "}
          <strong>
            business expedition experts in the United Arab Emirates
          </strong>
          , we bridge the gap between strategy and execution—empowering Asian
          companies to expand, establish, and thrive in the UAE market. With
          years of experience and cross-border collaboration, we’ve become a{" "}
          <strong>trusted partner for businesses</strong> ready to take their
          growth to the next level.
        </p>

        <img src={petik} alt="Petik" className="details-petik" />
      </div>
    </section>
  );
};

export default Details;
