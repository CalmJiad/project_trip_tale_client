import React from "react";

const Milestone = () => {
  return (
    <div className="container-fluid bg-success p-5 m-auto text-center text-white">
      <h2 className="mb-5 text-center">
        <i className="fas fa-2x fa-list-ol"></i> Milestone <br />{" "}
        <span className="text-warning">We Accomplished</span>
      </h2>
      <div className="row">
        <div className="col-md-3 p-3">
          <h2>
            <i className="fas fa-2x fa-synagogue"></i> 32
          </h2>
          <p className="fs-5">Dedicated Branch</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
            <i className="fas fa-2x fa-hands-helping"></i> 94
          </h2>
          <p className="fs-5">Experienced Employee</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
            <i className="far fa-2x fa-grin-beam"></i> 4389
          </h2>
          <p className="fs-5">Happy Participants</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
            <i className="fas fa-2x fa-thumbs-up"></i> 03
          </h2>
          <p className="fs-5">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
