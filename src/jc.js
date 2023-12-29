
function displayweather(response) {
    let temperatureElement = document.querySelector("#temp");
    let temp = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;



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

citysearch(Paris)