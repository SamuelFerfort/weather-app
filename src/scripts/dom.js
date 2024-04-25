export default function displayData(data) {
    const text = document.querySelector(".weather-text");
    const city = document.querySelector(".weather-city");
    const temp = document.querySelector(".weather-temp");
    const icon = document.querySelector(".weather-icon");
    const date = document.querySelector(".weather-date");
  
    text.innerHTML = `${data.condition}`;
    city.innerHTML = `${data.city}`;
    temp.innerHTML = `${data.temp_c}°C`;
    date.innerHTML = `${data.date}`;
  }