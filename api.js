const API_KEY = "97bec4a9e18cafaf34ea6d127d98fc3b";

export async function getWeather(city) {

  const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function saveFavorite(city) {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
      }),
    }
  );

  return await response.json();
}