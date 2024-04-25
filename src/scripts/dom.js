export default function displayData(data) {
  const text = document.createElement("div");
  const city = document.querySelector(".weather-city");
  const tempC = document.querySelector(".c");
  const tempF = document.querySelector(".f");
  const img = document.createElement("img");
  const date = document.querySelector(".weather-date");
  const textDiv = document.querySelector(".weather-text");
  textDiv.innerHTML = "";

  text.innerHTML = `${data.condition}`;
  city.innerHTML = `${data.city}, ${data.country}`;
  tempC.innerHTML = `${data.temp_c}°C`;
  tempF.innerHTML = `${data.temp_f}°F`;
  date.innerHTML = `${data.date}`;
  img.src = `${data.icon}`;
  textDiv.appendChild(text);
  textDiv.appendChild(img);
}
