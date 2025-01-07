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
const GIPHY_KEY = "YphoJo3ndyPiIjXnu0Hbb0Ua0DxzXHgM";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${WEATHER_KEY}&contentType=json`,
    );
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getGiphy(weatherLooksLike) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_KEY}&s=${weatherLooksLike}`,
    {
      mode: "cors",
    },
  );
  const url = await response.json();
  return url.data.images.original.url;
}

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

function setColorsAndGif(div, temperature, clime) {
  div.classList.remove("heat", "medium", "cold");
  if (temperature >= 30) {
    div.classList.add("heat");
  }
  if (temperature >= 15 && temperature < 30) {
    div.classList.add("medium");
  }
  if (temperature < 15) {
    div.classList.add("cold");
  }

  getGiphy("Clima" + clime)
    .then((r) => {
      const parentNode = $(".main-content");
      let img;
      img = $(".weather-img");
      if (!img) {
        img = c$("img", "weather-img", "");
      }

      img.src = r;
      parentNode.appendChild(img);
    })
    .catch((error) => console.log(error));
}

function App() {
  const form = $("#weather-form");
  const input = $("#locationValue");
  let value;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      value = input.value;
      input.value = "";
    }
    const weatherResponse = await getWeather(value);
    displayInformation(weatherResponse);
    const body = $(".main-content");
    const temp = weatherResponse.currentConditions.temp;
    const clime = weatherResponse.currentConditions.conditions;
    setColorsAndGif(body, temp, clime);
  });
}

App();
