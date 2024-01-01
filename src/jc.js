
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

    getForecast(response.data.city);


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
    console.log(apiKey);


}

function showsearchform(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-form-input");

    citysearch(searchinput.value);
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Frid", "Sat"];
    return days[date.getDay()];
}


function getForecast(city) {
    let apiKey = "aao06f2277a94dbe2tdbecb5feb42d83";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayforecast);
}




function displayforecast(response) {
    console.log(response.data);



    let forecastHtml = "";

    response.data.daily.forEach(function (day, index) {
        if (index < 5) {
            forecastHtml =
                forecastHtml +
                ` <div class="weather-forecast-temperatures-day">
                    <div class=" weather-forecast-date">${formatDay(day.time)} </div>
                    <div class="Weather-forecast-icon"> 
                    <img src="${day.condition.icon_url}"  />
                    </div>
                    <span class=" weather-forecast-temperatures-max"><strong>${Math.round(day.temperature.maximum
                )}°</strong></span> 
                    <span class="weather-forecast-temperatures-min"> <strong>${Math.round(day.temperature.minimum
                )} </strong></span>
                </div>`;
        }
    });
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", showsearchform);

citysearch("Nairobi");
getForecast("Nairobi");

