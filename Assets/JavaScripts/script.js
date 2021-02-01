// API Calls
const apiKey = "792ee81e691256c1aa741d76e3a33b8a";

const fetchWeatherData = async (city) => {
    let apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("cityName", data.name);
        localStorage.setItem("temperature", data.main.temp);
        localStorage.setItem("humidity", data.main.humidity);
        localStorage.setItem("description", data.weather[0].description);
        localStorage.setItem("windSpeed", data.wind.speed);
        localStorage.setItem("lonValue", data.coord.lon);
        localStorage.setItem("latValue", data.coord.lat);
        localStorage.setItem("currentIconURL", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    }); 
}

const fetchUVIndexData = async () => {
    let latValue = localStorage.getItem("lonValue");
    let lonValue = localStorage.getItem("latValue");
    let apiCall = await fetch(`http://api.openweathermap.org/data/2.5/uvi?lat=${latValue}&lon=${lonValue}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("UV", data.value);
    })
}

console.log(`City: ${localStorage.getItem("cityName")}`);
console.log(`Temperature: ${localStorage.getItem("temperature")}°F`);
console.log(`Humidity: ${localStorage.getItem("humidity")}`);
console.log(`The description value from data is ${localStorage.getItem("description")}`);
console.log(`The wind speed is ${localStorage.getItem("windSpeed")}MPH`);
console.log(`The longtitude value is ${localStorage.getItem("lonValue")}`);
console.log(`The latitude value is ${localStorage.getItem("latValue")}`);
console.log(`The image url for current date icon is ${localStorage.getItem("currentIconURL")}`);
console.log(`The UV index valuue is ${localStorage.getItem("UV")}`);

// document.getElementById('temprature').innerText = `Temperature: ${tempValue}°F`;
// document.getElementById('humidity').innerText = `Humidity: ${humiValue}%`;