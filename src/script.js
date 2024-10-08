function displayTime() {
  let barcelona = moment().tz("Europe/Madrid");
  let barcelonaDate = document.querySelector("#barcelona-date");
  barcelonaDate.innerHTML = `${moment()
    .tz("Europe/Madrid")
    .format("ddd, MMMM D, YYYY")}`;

  let sanjuanDate = document.querySelector("#sanjuan-date");
  sanjuanDate.innerHTML = `${moment()
    .tz("America/Puerto_Rico")
    .format("ddd, MMMM D, YYYY")}`;

  barcelonaTime = document.querySelector("#barcelona-time");
  barcelonaTime.innerHTML = `${moment()
    .tz("Europe/Madrid")
    .format("H:mm:ss [<small>]A[</small>]")}`;
  sanjuanTime = document.querySelector("#sanjuan-time");
  sanjuanTime.innerHTML = `${moment()
    .tz("America/Puerto_Rico")
    .format("H:mm:ss [<small>]A[</small>]")}`;
}

setInterval(displayTime, 1);

function updateCity(event) {
  if (event.target.value.length > 0) {
    let city = event.target.value;
    if (city === "current") {
      city = moment.tz.guess();
    }
    let cityName = city.replace("_", " ").split("/")[1].replace(/_/, " ");

    let citiesElement = document.querySelector("#time-selection");
    let content = "";

    content += `<div class="main-city">
        <h2>${cityName}</h2>
        <div class="date">${moment().tz(city).format("ddd, MMMM D, YYYY")}</div>
        <div class="local-time">${moment()
          .tz(city)
          .format("H:mm:ss [<small>]A[</small>]")}</div>
      </div>`;

    citiesElement.innerHTML = content;
  }
}

let selectedCity = document.querySelector("#cities");
selectedCity.addEventListener("change", updateCity);
