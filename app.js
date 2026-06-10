import { getWeather, saveFavorite } from "./api.js";
import { displayWeather } from "./weather.js";

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;

  const data = await getWeather(city);

  displayWeather(data);
});

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", async () => {

  const city =
    document.getElementById("cityInput").value;

  await saveFavorite(city);

  alert("Favorite saved!");
});