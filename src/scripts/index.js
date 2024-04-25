import "../styles.css";
import getData from "./data.js";

const search = document.querySelector(".search");
const city = document.querySelector("input");
search.addEventListener("click", async () => {
  const weatherData = await getData(city.value);
  console.log(weatherData);
});
