import React from "react";
import HeroBanner from "../components/Front/HeroBanner";
import Services from "../components/Front/Services";
import AboutUs from "../components/Front/AboutUs";
import Course from "../components/Front/Course";
import Features from "../components/Front/Features";
import Events from "../components/Front/Events";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Services />
      <AboutUs />
      <Course />
      <Features />
      <Events />
    </div>
  );
};

export default Home;
