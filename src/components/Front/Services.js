import React from "react";
import "./styles/services.css";
import Icon1 from "./../../assets/images/sve-icon4.png";
import Icon2 from "./../../assets/images/sve-icon5.png";
import Icon3 from "./../../assets/images/sve-icon6.png";

function Services() {
  return (
    <section id="servicesDetails">
      <div className="services-details">
        <div className="containers">
          <div className="d-flex" style={{ gap: "1rem" }}>
            <img src={Icon1} alt="" />
            <div>
              <h2>Education Services</h2>
              <p>
                Seamlessly visualize quality intellectual capital without
                superior collaboration and idea sharing listically
              </p>
            </div>
          </div>

          <div className="d-flex" style={{ gap: "1rem" }}>
            <img src={Icon2} alt="" />
            <div>
              <h2>International Hubs</h2>
              <p>
                Seamlessly visualize quality intellectual capital without
                superior collaboration and idea sharing listically
              </p>
            </div>
          </div>

          <div className="d-flex" style={{ gap: "1rem" }}>
            <img src={Icon3} alt="" />
            <div>
              <h2>Bachelor’s and Master’s</h2>
              <p>
                Seamlessly visualize quality intellectual capital without
                superior collaboration and idea sharing listically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
