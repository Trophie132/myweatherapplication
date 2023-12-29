

function showsearchform(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-form-input");
    let city = document.querySelector("#city");
    city.innerHTML = (searchinput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", showsearchform);