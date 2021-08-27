// create header for weather application
const header =document.createElement("h1")
header.innerHTML = "The Weather App"
header.className = "the-header"
document.body.append(header)

// create container for input and button for search
const div1 =document.createElement("div")
div1.className = "main-container";
document.body.append(div1)

// create input and search button within the div1
const input =document.createElement("input")
input.className = "entry"
input.placeholder = "City or Zip"
div1.appendChild(input)

// button
const button =document.createElement("button")
button.innerHTML = "Search"
button.className = "search-button"
div1.appendChild(button)
//
// end of main container elements

// secondary container for user data output
const tempContainer =document.createElement("div")
tempContainer.className = "other-container"
document.body.append(tempContainer)
//
// end of second container

// create components for API Data
const apiKey = "f0fc625ac1e39925a536e0a2cf0990e0"
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;


// start of async function section

async function getWeatherData(){
    tempContainer.innerHTML = ""
    const getInput =document.querySelector(".entry").value;
    const getWeather = await fetch(weatherApi + `&q=${getInput}`);
    const jsonWeather = await getWeather.json();
    console.log(jsonWeather)

    const temperature =document.createElement("h2");
    temperature.innerHTML = jsonWeather.main.temp;
    tempContainer.append(temperature)

}

button.addEventListener("click", () => getWeatherData())

//
// end of function