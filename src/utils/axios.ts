import ax from "axios";

const axios = ax.create({
  baseURL: "http://api.weatherapi.com/v1/",
  timeout: 8000,
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export default axios;
