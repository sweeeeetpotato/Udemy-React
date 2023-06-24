import React from "react";
import Weather from "components/Weather";
import Date from "components/CurrentDate";
import "../../reset.css";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <Date />
      <h1 className="txt-hide">나만의 페이지</h1>
      <Weather />
    </header>
  );
}
