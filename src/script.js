function displayTime() {
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".local-time");
    let barcelonaTime = moment().tz("Europe/Madrid");

    barcelonaDateElement.innerHTML = barcelonaTime.format("ddd, MMMM D, YYYY");
    barcelonaTimeElement.innerHTML = barcelonaTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let sanjuanElement = document.querySelector("#sanjuan");
  if (sanjuanElement) {
    let sanjuanDateElement = sanjuanElement.querySelector(".date");
    let sanjuanTimeElement = sanjuanElement.querySelector(".local-time");
    let sanjuanTime = moment().tz("America/Puerto_Rico");

    console.log(sanjuanTime);

    sanjuanDateElement.innerHTML = sanjuanTime.format("ddd, MMMM D, YYYY");
    sanjuanTimeElement.innerHTML = sanjuanTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityName = city.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(city);
  let citiesElement = document.querySelector("#time-selection");
  citiesElement.innerHTML = `<div class="main-city">
      <div><h2>${cityName}</h2>
      <div class="date">${cityTime.format("ddd, MMMM D, YYYY")}</div>
      </div>      
      <div class="local-time">${cityTime.format(
        "H:mm:ss"
      )} <small>${cityTime.format("A")}</small></div>
    </div>`;
}

setInterval(displayTime, 1);

let selectedCity = document.querySelector("#cities");
selectedCity.addEventListener("change", updateCity);
