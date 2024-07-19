const initialCityWeather = {
    city: "Melbourne",
    temperature: 22,
    description: "Cloudy",
    icon: "http://openweathermap.org/img/wn/03d@2x.png"
};

class cityWeather {
    constructor(city, temperature, description, icon) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.icon = icon;
    }
}

function getCityName() {
    const cityInput = document.getElementById("city-input");
    let cityName = cityInput.value.trim();

    if (!cityName) {
        alert("Please enter a city name.");
        return null;
    }

    return cityName;
}

async function fetchWeatherData(city) {
    const apiKey = "6a0e43a954f28b82b19e6601ee71a560";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data. Please try again later.");
        return null;
    }
}

function updateWeatherDisplay(weatherData) {
    if (!weatherData) {
        return;
    }

    const weatherInfoDiv = document.getElementById("weather-info");
    weatherInfoDiv.innerHTML = `
      <h2>${weatherData.name} Weather</h2>
      <p>Temperature: ${Math.round(weatherData.main.temp)}°C</p>
      <p>Description: ${weatherData.weather[0].description}</p>
      <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="${weatherData.weather[0].description} weather icon">
    `;
}

const getWeatherButton = document.getElementById("get-weather-button");

getWeatherButton.addEventListener("click", async () => {
    const cityName = getCityName();
    if (!cityName) {
        return;
    }

    const weatherData = await fetchWeatherData(cityName);
    updateWeatherDisplay(weatherData);
})