import React, { useEffect, useState } from "react";
import "./style.css";

export default function CurrentDate() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const currentDate = () => {
    const dateInfo = new Date();
    const dayArr = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
    const year = String(dateInfo.getFullYear()).slice(2, 4);
    const month = String(dateInfo.getMonth() + 1).padStart(2, 0);
    const current_date = String(dateInfo.getDate()).padStart(2, 0);
    const dayIndex = dateInfo.getDay();

    setDate(`${year}.${month}.${current_date}`);
    setDay(dayArr[dayIndex]);
  };

  useEffect(() => {
    currentDate();
  }, []);

  return (
    <div className="date-wrapper">
      <span className="date">{date}</span>
      <span className="day">{day}</span>
    </div>
  );
}
