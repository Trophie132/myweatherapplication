
function displayweather(response) {
    let temperatureElement = document.querySelector("#temp");
    let temp = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");


    console.log(response.data)


    timeElement.innerHTML = formatDate(date)
    speedElement.innerHTML = `${response.data.wind.speed} km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temp);
    cityElement.innerHTML = response.data.city;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

}
function formatDate(date) {

    let mimutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}:${mimutes}`;

    if (mimutes < 10) {
        mimutes = `0 ${minutes}`;
    }
}


function citysearch(city) {

    let apiKey = "aao06f2277a94dbe2tdbecb5feb42d83 ";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayweather);


}

function showsearchform(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-form-input");

    citysearch(searchinput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", showsearchform);

citysearch("Nairobi");