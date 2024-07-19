const apiKey = "6a0e43a954f28b82b19e6601ee71a560";

const cityInput = document.getElementById("city-input");
const getWeatherButton = document.getElementById("get-weather-button");
const weatherInfoDiv = document.getElementById("weather-info");

function showError(message) {
    weatherInfoDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = {
                    city: data.name,
                    temp: Math.round(data.main?.temp),
                    description: data.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                };

                weatherInfoDiv.innerHTML = `
          <h2>${weatherInfo.city} Weather</h2>
          <p>Temperature: ${weatherInfo.temp}°C</p>
          <p>Description: ${weatherInfo.description}</p>
          <img src="${weatherInfo.icon}" alt="${weatherInfo.description} weather icon">
        `;
            } else {
                showError(`Error: ${data.message}`);
            }
        })
        .catch(error => showError("Error fetching weather data"));
}

getWeatherButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        getWeather(cityName);
    } else {
        showError("Please enter a city name");
    }
});
