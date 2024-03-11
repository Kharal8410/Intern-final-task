import React from "react";
import "./styles/aboutUs.css";
import aboutImg from "./../../assets/images/about_img_3.png";
import Principle from "./../../assets/images/principal.jpg";

function AboutUs() {
  return (
    <section id="about">
      <div className="containers">
        <div className="about">
          <div className="about-bg-image">
            <img src={aboutImg} alt="" />
          </div>
          <div>
            <span
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <i
                className="fa-solid fa-graduation-cap"
                style={{ color: "#b1383d" }}
              ></i>
              <p> About Our CIA</p>
            </span>
            <h2>A Few Words About the CIA</h2>
            <p>
              Cosmic International Academy was established in 2005 A.D. as a
              Private educational institution, which is located in Koteshwor,
              Kathmandu, Nepal. It is affiliated with the National Examination
              Board (NEB) and approved by the Ministry of Education. It offers
              education programs from Ten Plus Two under Science, Management,
              Humanities, Law streams.
            </p>
            <p>
              CIA provides a safe learning environment that enables critical
              thinking and risk-taking and calls forth a love of learning. It
              recognizes each student as a unique individual with their own
              special set of strengths and talents and emphasizes inquiry,
              teamwork, mutual respect, and collaboration.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <section id="principal-message">
        <div className="container-principal">
          <div className="contents ">
            <div className="principal-info">
              <div className="principal-image">
                <img src={Principle} alt="Principal" />
              </div>
              <div className="contents-text">
                <h2>Message From Principal</h2>
                <p>Arjun Kumar Khattri</p>
                <p>
                  Welcome to The Cosmic International School. We strive for
                  excellence in all that we do, from academic instructions to
                  students. Our goal for our child is to leave Cosmic
                  International School as confident, caring, and responsible
                  global citizens. Hence, we offer a balanced curriculum that
                  nurtures these qualities in your child.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  in dolorum recusandae minima cupiditate porro praesentium
                  voluptatum iusto sapiente distinctio? Sint, eveniet dolore.
                  Quaerat cumque deserunt voluptatum dignissimos? Iusto, illo!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione nemo nam error dolore culpa. Suscipit quibusdam aut
                  ipsam rerum assumenda vel numquam excepturi quia quasi,
                  similique, nemo labore, ipsum esse?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
