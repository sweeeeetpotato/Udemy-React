import React, { useEffect, useState } from "react";
import "./style.css";

export default function Weather() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const API_KEY = "6e425088257be0a1df03bd179e337c0f";

  function handleGeoSuccess(pos) {
    const { latitude, longitude } = pos.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  }

  function handleGeoError() {
    console.log("error");
  }

  function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setWeather(json.weather[0].description);
        setTemp(`${json.main.temp}℃`);
        setHumidity(`${json.main.humidity}%`);
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  useEffect(() => {
    getWeather(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="weather">
      <span>{weather}</span>
      <span>{temp}</span>
      <span>{humidity}</span>
    </div>
  );
}
