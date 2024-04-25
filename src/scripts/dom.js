function dateFormatter(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateData = new Date(date.split(" ")[0]);
  const day = days[dateData.getDay()];
  const month = months[dateData.getMonth()];
  const dayOfMonth = dateData.getDate();

  const year = dateData.getFullYear();
  let daySuffix;
  if (dayOfMonth === 1) {
    daySuffix = "st";
  } else if (dayOfMonth === 2) {
    daySuffix = "nd";
  } else if (dayOfMonth === 3) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }
  return `${day}, ${dayOfMonth}${daySuffix} ${month} ${year}`;
}


export default function displayData(data) {
  const text = document.createElement("div");
  const city = document.querySelector(".weather-city");
  const tempC = document.querySelector(".c");
  const tempF = document.querySelector(".f");
  const img = document.createElement("img");
  const dateElement = document.querySelector(".weather-date");
  const textDiv = document.querySelector(".weather-text");
  textDiv.innerHTML = "";
  text.innerHTML = `${data.condition}`;
  city.innerHTML = `${data.city}, ${data.country}`;
  tempC.innerHTML = `${data.temp_c}°C`;
  tempF.innerHTML = `${data.temp_f}°F`;
  dateElement.innerHTML = dateFormatter(data.date);
  img.src = `${data.icon}`;
  textDiv.appendChild(text);
  textDiv.appendChild(img);
}
