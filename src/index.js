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
  const container = $(".weather-container");
  const {
    currentConditions,
    resolvedAddress,
    timezone,
    latitude,
    longitude,
    days,
  } = obj;
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
  `;
}

function getFormValue() {
  const form = $("form");
  const input = $("#locationValue");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      const value = input.value
      input.value = ''
      return value;
    }
  });
}

function checkInputValidity() {
  const input = $("#locationValue");

  input.addEventListener("input", (e) => {
    input.setCustomValidity("");

    if (input.validity.valueMissing) {
      input.setCustomValidity("You should enter yor city");
    }

    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(
        "The shortest country name is 4 characters and the longest is 22 chars",
      );
    }

    input.reportValidity();
  });
}


checkInputValidity()

getFormValue();
