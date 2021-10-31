import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const BookedEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://creepy-mansion-85068.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const filteredEvents = events.filter(
    (singleEvent) => singleEvent.email === user.email
  );

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
            const remainingEvents = events.filter(
              (remEvent) => remEvent._id !== id
            );
            setEvents(remainingEvents);
            // window.location.reload();
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">
        All Your <span className="text-success">Booked Trips </span>Goes There_
      </h2>
      {filteredEvents.map((singleEvent) => (
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
            <button
              onClick={() => handleDeleteTrip(singleEvent._id)}
              className="btn btn-warning px-5"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookedEvents;
