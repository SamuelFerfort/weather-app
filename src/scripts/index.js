import "../styles.css";
import getData from "./data.js";
import "../assets/weather.jpg";
import "../assets/search.png";
import displayData from "./dom.js";

const search = document.querySelector(".search");
const input = document.querySelector("input");
search.addEventListener("click", async () => {
  const weatherData = await getData(input.value);
  displayData(weatherData);
});


