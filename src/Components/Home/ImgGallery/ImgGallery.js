import React from "react";
import "./ImgGallery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.png";
import img4 from "../../../images/4.jpg";
import img5 from "../../../images/6.jpg";
import img6 from "../../../images/8.jpg";
import img7 from "../../../images/9.jpg";

const ImgGallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h2 className="my-5 text-center">
        __Our <span className="text-info">Photo Gallery</span>__
      </h2>
      <Carousel className="mb-5" responsive={responsive}>
        <img src={img1} className="img-thumbnail slider-image" alt="" />
        <img src={img2} className="img-thumbnail slider-image" alt="" />
        <img src={img3} className="img-thumbnail slider-image" alt="" />
        <img src={img4} className="img-thumbnail slider-image" alt="" />
        <img src={img5} className="img-thumbnail slider-image" alt="" />
        <img src={img6} className="img-thumbnail slider-image" alt="" />
        <img src={img7} className="img-thumbnail slider-image" alt="" />
      </Carousel>
    </div>
  );
};

export default ImgGallery;
