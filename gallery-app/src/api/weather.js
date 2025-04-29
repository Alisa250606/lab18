import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const fetchWeather = (city) =>
  axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`);
