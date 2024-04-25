import "../styles.css";
import getData from "./data.js";
import "../assets/weather.jpg";
import searchImg from "../assets/search.png";
import displayData from "./dom.js";

const search = document.querySelector(".search");
const input = document.querySelector("input");
const searchPng = document.querySelector(".searchImg");
search.addEventListener("click", async () => {
  if (!input.value) return;
  const weatherData = await getData(input.value);
  displayData(weatherData);
});

searchPng.src = searchImg;
