import React from "react";
import "./styles/events.css";

import img1 from "./../../assets/images/591.jpg";
import img2 from "./../../assets/images/550.jpg";
import img3 from "./../../assets/images/553.jpg";

function Events() {
  return (
    <section id="events">
      <div className="containers">
        <div className="events">
          <div className="heading">
            <span
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <i
                className="fa-solid fa-graduation-cap"
                style={{ color: "#b1383d" }}
              ></i>
              <p>Our Events</p>
            </span>
            <h2>Our Past Events</h2>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="viewMoreBtn">
              <a href="./Pages/Event.html">View More</a>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="events-cards">
            <div className="events-card">
              <div className="image-container">
                <img src={img1} alt="" />
                <div className="date">
                  <b>28</b>
                  <small>October, 2016</small>
                </div>
              </div>
              <div className="events-card-content">
                <div>
                  <h2>FECA Football Tournament</h2>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <span className="d-flex align-items-center">
                    <p>28 October, 2016</p>
                    <i className="fa-solid fa-arrow-right-long"></i>
                    <p> Portage Ave.Winnipeg, Canada</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="events-card">
              <div className="image-container">
                <img src={img2} alt="" />
                <div className="date">
                  <b>20</b>
                  <small>Bhadra, 2073</small>
                </div>
              </div>
              <div className="events-card-content">
                <div>
                  <h2>Children's Day</h2>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <span className="d-flex align-items-center">
                    <p>26 Bhadra, 2073</p>
                    <i className="fa-solid fa-arrow-right-long"></i>
                    <p> Portage Ave.Winnipeg, Canada</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="events-card">
              <div className="image-container">
                <img src={img3} alt="" />
                <div className="date">
                  <b>20</b>
                  <small>March, 2016</small>
                </div>
              </div>
              <div className="events-card-content">
                <div>
                  <h2>Deushi Bhailo Program</h2>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <span className="d-flex align-items-center">
                    <p>26 March, 2016</p>
                    <i className="fa-solid fa-arrow-right-long"></i>
                    <p> Portage Ave.Winnipeg, Canada</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
