import "./style.css";
import "./normalize.css";

const $ = (el) => document.querySelector(el);
const c$ = (el, cls, content) => {
  const elem = document.createElement(el);
  elem.classList.add(cls);
  elem.textContent = content;
  return elem;
};

const WEATHER_KEY = "FULVUHH7Y75BCMEVWAYCYS8MU";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&key=${WEATHER_KEY}&contentType=json`,
    );
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

getWeather("oaxaca")
  .then((r) => {
    console.log(r);
    displayInformation(r);
  })
  .catch((r) => console.log(r));

function displayInformation(obj) {
  const container = $('.weather-container')
  const { currentConditions, resolvedAddress, timezone, latitude, longitude, days } = obj
  const day = days[0].datetime;
  
  container.innerHTML = `
        <p class="city">${resolvedAddress}</p>
        <p class="date">${day}</p>
        <div class="current-conditions">
            <p class="conditions">${currentConditions.conditions}</p>
            <p class="temp">${currentConditions.temp}</p>
        </div>
        <p class="timezone">${timezone}</p>
        <p class="latitude">${latitude}</p>
        <p class="longitude">${longitude}</p>
  `
}