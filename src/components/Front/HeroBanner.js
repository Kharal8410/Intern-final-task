import React from "react";
import "./styles/heroBanner.css";
import Img1 from "./../../assets/images/slider_1.jpg";
import Img2 from "./../../assets/images/slider2.jpg";
import Img3 from "./../../assets/images/slider3.jpg";

import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

function HeroBanner() {
  return (
    <section id="hero-banner">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Education as Continuous Reconstruction of Experiences</h1>
          <p>
            Educating all students to achieve today and tomorrow in a global
            community and economy
          </p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="hero-swiper overflow-hidden rounded-xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            navigation={{
              nextEl: " .swiper-button-next",
              prevEl: " .swiper-button-prev",
            }}
            loop={true}
          >
            <SwiperSlide>
              <div>
                <img src={Img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img3} alt="" />
              </div>
            </SwiperSlide>
            <span className="swiper-button-prev"></span>
            <span className="swiper-button-next"></span>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
