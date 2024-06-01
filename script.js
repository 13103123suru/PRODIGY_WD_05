document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var location = document.getElementById('location').value;
    getWeather(location);
});

function getWeather(location) {
    var apiKey = 'YOUR_API_KEY'; // Replace with your API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    });
}

function displayWeather(data) {
    var weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}


