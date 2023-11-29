import React, { useState, useEffect } from "react";

const DateTimeElement = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const day = currentDateTime.toLocaleDateString(undefined, {
    weekday: "short",
  });
  const date = currentDateTime.toLocaleDateString(undefined, {
    day: "numeric",
  });
  const time = currentDateTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="date-time-element">
      <div className="day-date">
        <p className="day"> {day}</p>
        <p className="date"> {date}</p>
      </div>
      <p className="time"> {time}</p>
    </div>
  );
};

export default DateTimeElement;
