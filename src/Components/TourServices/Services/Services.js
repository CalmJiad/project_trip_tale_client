import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://creepy-mansion-85068.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (services.length === 0) {
    return (
      <div class="text-center m-5">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="services-sec mb-5">
      <h1 className="text-center my-5">
        ___What we are <span className="text-info">offering right now</span>___
      </h1>
      <div className="row g-5 card-group p-3 mx-0 services-cards">
        {services.map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
