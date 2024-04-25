export default async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=36612d98b83d4d8fb32114839242404&q=${city}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const allData = await response.json();
    const data = {
      name: allData.location.name,
      country: allData.location.country,
      temp_c: allData.current.temp_c,
      temp_f: allData.current.temp_f,
      condition: allData.current.condition.text,
    };
    return data;
  } catch (error) {
    return null;
  }
}
