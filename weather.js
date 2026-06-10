export function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");

  weatherDiv.innerHTML = `
    <h2>${data.location.name}</h2>
    <p>Temperature: ${data.current.temperature}°C</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind Speed: ${data.current.wind_speed} km/h</p>
    <p>${data.current.weather_descriptions[0]}</p>
  `;
}