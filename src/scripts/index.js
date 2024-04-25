import "../styles.css";
import getData from "./data.js";
import "../assets/weather.jpg";
import searchImg from "../assets/search.png";
import displayData from "./dom.js";

const autocompleteList = document.getElementById("autocomplete-list");
const search = document.querySelector(".search");
const input = document.querySelector("input");
const searchPng = document.querySelector(".searchImg");

searchPng.src = searchImg;

function displayAutocomplete(data) {
  autocompleteList.innerHTML = "";
  data.forEach((location) => {
    const li = document.createElement("li");
    li.textContent = location.name;
    li.addEventListener("click", () => {
      input.value = location.name;
      autocompleteList.innerHTML = "";
      searchLocation(input.value);
    });
    autocompleteList.appendChild(li);
  });
}
input.addEventListener("input", async function () {
  const query = this.value.trim();
  if (query.length === 0) {
    autocompleteList.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=36612d98b83d4d8fb32114839242404&q=${query}`
    );
    const data = await response.json();
    displayAutocomplete(data);
  } catch (error) {
    console.error("Error fetching autocomplete data:", error);
  }
});

async function searchLocation(value) {
  if (!value) return;
  const weatherData = await getData(value);
  displayData(weatherData);
}

search.addEventListener("click", () => {
  searchLocation(input.value);
});
