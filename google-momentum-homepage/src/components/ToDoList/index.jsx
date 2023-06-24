import React, { useState } from "react";
import "./style.css";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newItem = e.target.value;
      setToDoList([...toDoList, newItem]);
      e.target.value = "";
    }
  };
  
  const itemRemove = (index) => {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  };

  return (
    <section className="toDoList-wrapper">
      <h3>Today To do List</h3>
      <input
        type="text"
        placeholder="오늘 할 일을 입력하세요."
        className="list-input"
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <ul className="toDoList">
        {toDoList.map((value, index) => {
          return (
            <li key={index} onClick={() => itemRemove(index)}>
              {value}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
