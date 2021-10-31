import React, { useEffect, useState } from "react";

const ManageEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("https://creepy-mansion-85068.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  // Deleting a confirmed trip
  const handleDeleteTrip = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to cancel the trip?"
    );
    if (proceed) {
      const url = `https://creepy-mansion-85068.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Trip Cancelled Successfully");
            const remainingEvents = allEvents.filter(
              (remEvent) => remEvent._id !== id
            );
            setAllEvents(remainingEvents);
            // window.location.reload();
          }
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-center my-4">
        Booked Trips By{" "}
        <span className="text-success">Our Happy Participants</span>_
      </h2>
      {allEvents.map((singleEvent) => (
        <div key={singleEvent._id} className="bg-info my-3 rounded">
          <div className="py-3 px-5">
            <h5>{singleEvent.name}</h5>
            <h5>Trip: {singleEvent.eventName}</h5>
            <p>
              Email: {singleEvent.email}
              <br />
              Address: {singleEvent.address}
              <br />
              Package Cost: {singleEvent.cost}
            </p>
            <button className="btn btn-success px-4 me-3">Approve</button>
            <button
              onClick={() => handleDeleteTrip(singleEvent._id)}
              className="btn btn-warning px-4"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageEvents;
