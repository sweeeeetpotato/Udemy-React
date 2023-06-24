import React, { useEffect, useState } from "react";
import "./style.css";

// 실시간 시계, 인사말
export default function Clock({ userName, setUserName }) {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [modify, setModify] = useState(false);

  const currentTime = () => {
    const dateInfo = new Date();
    const hour = String(dateInfo.getHours()).padStart(2, 0);
    const minutes = String(dateInfo.getMinutes()).padStart(2, 0);
    setTime(`${hour}:${minutes}`);

    if (hour > 20 || hour < 6) {
      setGreeting("Good Night,");
    } else if (hour > 16) {
      setGreeting("Good Evening,");
    } else if (hour > 11) {
      setGreeting("Good Afternoon,");
    } else if (hour > 5) {
      setGreeting("Good Morning,");
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setUserName(e.target.value);
      setModify(false);
    }
  };

  useEffect(() => {
    currentTime();
    const interval = setInterval(currentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="clock">{time}</span>
      <div className="greetings">
        <span>{greeting}</span>
        {modify ? (
          <input
            type="text"
            className="userNameModify-input"
            placeholder={userName}
            onKeyDown={(e) => {
              handleOnKeyDown(e);
            }}
          />
        ) : (
          <span
            onClick={(e) => {
              setModify(true);
            }}
          >
            {" "}
            {userName}
          </span>
        )}
      </div>
    </>
  );
}
