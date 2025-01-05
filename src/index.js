import "./style.css";
import "./normalize.css";

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
  .then((r) => console.log(r))
  .catch((r) => console.log(r));
