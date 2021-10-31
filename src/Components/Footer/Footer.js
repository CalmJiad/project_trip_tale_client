import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bar">
      <div className="container-fluid bg-dark">
        <div className="row bg-dark">
          <div className="col-md-4 p-5 footer-part">
            <div>
              <p className="fs-5 text-warning">
                <i className="fas fa-2x fa-campground"></i> Trip Tale <br />{" "}
                <small className="lead brand">
                  __creating the tales for future
                </small>
              </p>
            </div>
            <br />
            <p className="text-info">
              Better Arrangements <br /> Better Assistancy <br /> Ensured Safety{" "}
              <br /> Maximum Comfortness <br />
            </p>
          </div>
          <div className="col-md-4 p-5 text-info footeritem footer-part">
            <h5>
              <i className="fas fa-2x fa-location-arrow"></i> Our Head Office
            </h5>
            <p className="mt-4">
              1211, Chattagram Hill View <br /> Hill View Residential R/A <br />{" "}
              Pahartali, Chattagram, Bangladesh
            </p>
            <p>
              Email Us: support@triptale.com <br /> P: +183 87 66 4321
            </p>
          </div>
          <div className="col-md-4 p-5 text-info footer-part">
            <h5>
              <i className="far fa-2x fa-clock"></i> Working Time
            </h5>
            <p className="mt-4">
              Mon - Wed - 9:00 AM - 7:00 PM <br />
              Thursday - 9:00 AM - 6:30 PM <br />
              Friday - 9:00 AM - 6:00 PM <br />
              Sat - Sun - Closed
            </p>
          </div>
        </div>
        <p className="text-center text-secondary mb-0 copyright fs-5">
          Trip Tale &copy; All Rights Reserved | | Ekramul Haque Jiad | | 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
