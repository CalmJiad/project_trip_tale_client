import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Addservice = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://creepy-mansion-85068.herokuapp.com/services", data)
      .then((res) => {
        //  Showing alert
        if (res.data.insertedId) {
          alert("Service Added Successfully");
          //   Form resetting
          reset();
        }
      });
  };

  return (
    <div className="addService">
      <h2 className="text-center my-3">Want to host a trip? Add Please_</h2>
      <div className="container-fluid">
        <form
          className="text-center d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Event Name"
            {...register("name", { required: true, maxLength: 25 })}
          />
          <textarea
            placeholder="Event Description"
            {...register("description")}
          />
          <input
            placeholder="Average Cost"
            type="number"
            {...register("price")}
          />
          <input
            placeholder="Total Member"
            type="number"
            {...register("sit")}
          />
          <input placeholder="Duration" {...register("duration")} />
          <input placeholder="Image" {...register("img")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addservice;
