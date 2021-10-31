import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, description, img } = service;
  return (
    <div className="col-md-4 col-sm-12 services-card">
      <div className="card h-100">
        <img src={img} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body text-center">
          <h4 className="card-title text-primary">{name}</h4>
          <p className="card-text">{description.slice(0, 100) + "...."}</p>
        </div>
        <div className="text-center m-auto mb-2">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-success px-5">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
