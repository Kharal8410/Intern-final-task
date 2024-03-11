import React from "react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Bio from "./../../assets/images/591.jpg";
import Echo from "./../../assets/images/592.jpg";
import BusinessMedia from "./../../assets/images/615.jpg";
import PublicAdministration from "./../../assets/images/596.jpg";

import "./styles/course.css";

SwiperCore.use([Navigation]);

function Course() {
  return (
    <section id="course">
      <div className="containers">
        <div className="courses">
          <div className="heading">
            <i
              className="fa-solid fa-graduation-cap"
              style={{ color: "#b1383d" }}
            ></i>
            <p> About Our CIA</p>
          </div>
          <div className="graduate-program">
            <h2>Academy Programs</h2>
            <div className="swiper courseSwiper">
              <Swiper slidesPerView={3} spaceBetween={50} navigation={true}>
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide" id="teams-slider">
                      <div className="course-card">
                        <div className="overflow-hidden">
                          <img
                            src={Bio}
                            alt="bio"
                            className=" transform transition duration-1000 ease-in-out hover:scale-105"
                          />
                        </div>
                        <div>
                          <div>
                            <h2>Biochemistry</h2>
                            <p>
                              Seamlessly visualize quality ellectual capital
                              without superior collaboration and idea tically
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="course-card">
                        <div className="overflow-hidden">
                          <img
                            src={Echo}
                            alt=""
                            className=" transform transition duration-1000 ease-in-out hover:scale-105"
                          />
                        </div>
                        <div>
                          <div>
                            <h2>Major in Economics</h2>
                            <p>
                              Seamlessly visualize quality ellectual capital
                              without superior collaboration and idea tically
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="course-card">
                        <div className="overflow-hidden">
                          <img
                            src={BusinessMedia}
                            alt=""
                            className=" transform transition duration-1000 ease-in-out hover:scale-105"
                          />
                        </div>
                        <div>
                          <div>
                            <h2>Business Media</h2>
                            <p>
                              Seamlessly visualize quality ellectual capital
                              without superior collaboration and idea tically
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="course-card">
                        <div className="overflow-hidden">
                          <img
                            src={PublicAdministration}
                            alt=""
                            className=" transform transition duration-1000 ease-in-out hover:scale-105"
                          />
                        </div>
                        <div>
                          <div>
                            <h2>Public Administration</h2>
                            <p>
                              Seamlessly visualize quality ellectual capital
                              without superior collaboration and idea tically
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                {/* <div className="swiper-button-prev">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="swiper-button-next">
                  <i className="fa-solid fa-angle-left"></i>
                </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
