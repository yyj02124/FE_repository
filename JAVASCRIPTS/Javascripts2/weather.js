//위도와 경도를 찾는것
const API_KEY = "5b38c86c98e37ffa3f5f12f62d5cb8ff";

function onGeoOK(mola) {
  const lat = mola.coords.latitude;
  const lon = mola.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = ` ${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
