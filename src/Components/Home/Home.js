import React from "react";
import Banner from "../Banner/Banner";
import Services from "../TourServices/Services/Services";
import "./Home.css";
import ImgGallery from "./ImgGallery/ImgGallery";
import Milestone from "./Milestone/Milestone";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ImgGallery></ImgGallery>
      <Milestone></Milestone>
    </div>
  );
};

export default Home;
