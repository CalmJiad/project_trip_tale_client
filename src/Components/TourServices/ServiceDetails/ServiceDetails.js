import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://creepy-mansion-85068.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // Form functionality
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://creepy-mansion-85068.herokuapp.com/users", data)
      .then((res) => {
        //  Showing alert
        if (res.data.insertedId) {
          alert("Participation Request Recorded");
          //   Form resetting
          reset();
        }
      });
  };
  return (
    <div className="container-fluid row mt-3 details-container">
      <h2 className="text-center mb-4">
        Ready to join these event? <span className="text-success">Confirm</span>{" "}
        Please_
      </h2>
      <div className="col-md-6 col-sm-12">
        <div class="card mb-3 m-auto">
          <img src={service.img} class="card-img-top img-thumbnail" alt="..." />
          <div class="card-body">
            <h3 class="card-title text-center">{service.name}</h3>
            <p class="card-text">{service.description}</p>
            <h4 class="card-text text-center">
              Participants: {service.sit} || Estimated Cost: {service.price}/=
              TK <br /> Package: {service.duration} || Meals, Rooms, Guides
            </h4>
          </div>
        </div>
      </div>
      {/* second part */}
      <div className="col-md-6 col-sm-12 order-form">
        <form
          className="text-center d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {service?.name && (
            <input
              defaultValue={service?.name}
              {...register("eventName", { required: true })}
            />
          )}
          {user?.displayName && (
            <input
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
            />
          )}
          {user?.email && (
            <input
              defaultValue={user?.email}
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
          )}
          <input
            placeholder="Contact Number"
            type="number"
            {...register("phone", { required: true })}
          />
          <input
            placeholder="Your Address"
            {...register("address", { required: true })}
          />
          {service?.price && (
            <input
              defaultValue={service?.price}
              placeholder="Event Cost Per Person"
              {...register("cost", { required: true })}
            />
          )}
          <input
            className="btn bg-success text-white"
            value="Book Your Sit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
