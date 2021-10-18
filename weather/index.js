let input = document.querySelector("#city-name");
let button = document.querySelector("#show");
let cityName = "";
input.addEventListener("input", function (event) {
  cityName = event.target.value;
});
button.addEventListener("click", function () {
  fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.temperature) {
        alert("Город не найден!");
        return;
      }
      let temperatureElement = document.createElement("h3");
      let windElement = document.createElement("h3");
      temperatureElement.innerText = `Температура воздуха: ${data.temperature}`;
      document.querySelector("body").appendChild(temperatureElement);
      windElement.innerText = `Средняя скорость ветра: ${data.wind}`;
      document.querySelector("body").appendChild(windElement);
      let day = 2;
      data.forecast.forEach((weather) => {
        let secondDayDiv = document.createElement("div");
        secondDayDiv.innerHTML = `<h2>Прогноз погоды на ${day}-й день</h3>
                <h3>Температура: ${weather.temperature}</h3>
                <h3>Скорость ветра: ${weather.wind}</h3>
                `;
        document.querySelector("body").appendChild(secondDayDiv);
        day++;
      });
    });
});
