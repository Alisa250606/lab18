import React, { useEffect, useState } from "react";
import "./MyCity.css";
import {
  FaMapMarkerAlt,
  FaTemperatureHigh,
  FaCloudSun,
  FaWind,
  FaTint,
} from "react-icons/fa";

import mirgorod1 from "../images/mirgorod-1.jpg";
import mirgorod2 from "../images/mirgorod2.jpg";
import mirgorod3 from "../images/mirgorod3.jpg";
import mirgorod4 from "../images/mirgorod4.webp";
import mirgorod5 from "../images/mirgorod5.jpg";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "066962c293ad401cb7d131053252604"; // твій ключ API

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Myrhorod&lang=uk`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Помилка завантаження погоди:", err));
  }, []);

  return (
    <div className="my-city">
      <h1>Миргород — місто мого серця 💗</h1>
      <p>
        Миргород — місто-курорт у Полтавській області, відоме своєю лікувальною
        мінеральною водою, зеленими парками і натхненням від творчості Миколи Гоголя.
      </p>

      <div className="images-grid">
        <img src={mirgorod1} alt="Фото 1 Миргорода" />
        <img src={mirgorod2} alt="Фото 2 Миргорода" />
        <img src={mirgorod3} alt="Фото 3 Миргорода" />
        <img src={mirgorod4} alt="Фото 4 Миргорода" />
        <img src={mirgorod5} alt="Фото 5 Миргорода" />
      </div>

      {weather ? (
        <div className="weather-box">
          <h2>
            <FaMapMarkerAlt /> Погода в {weather.location.name}, {weather.location.country}
          </h2>
          <p><FaTemperatureHigh /> Температура: {weather.current.temp_c}°C</p>
          <p><FaCloudSun /> Стан: {weather.current.condition.text}</p>
          <p><FaWind /> Вітер: {weather.current.wind_kph} км/год</p>
          <p><FaTint /> Вологість: {weather.current.humidity}%</p>
          <p>📍 Координати: {weather.location.lat}, {weather.location.lon}</p>
          <img src={weather.current.condition.icon} alt="Піктограма погоди" />
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
};

export default MyCity;
