import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="over">
      <div className="bigImage">
        <div className="overlay">
          <div className="text-part">
            <h1>Premium Tour Planner At Your Doorstep!</h1>
            <p>
              We are assuring the best quality tour services considering your
              budget with exclusive offerings. <br /> A friendly and familiar
              environment will let you explore the different portion of visiting
              newer places. <br /> So we always welcome our campers warmly.
            </p>
            <Link to="/services">
              <button className="btn btn-danger getStartedBtn">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
