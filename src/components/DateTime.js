import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <p>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</p>
  );
};

export default DateTime;
