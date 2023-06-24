import React from "react";
import "./style.css";

export default function UserNameInput({ setUserName }) {
  const handleOnKeyDown = (e) => {
    if(e.key === "Enter") {
      setUserName(e.target.value);
    }
  }

  return (
    <section className="userName-wrapper">
      <h3>Hello, What's your name?</h3>
      <input type="text" className="userName-input" onKeyDown={(e) => {
        handleOnKeyDown(e)
      }}/>
    </section>
  );
}
