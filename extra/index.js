let input = document.querySelector("#country-name");
let button = document.querySelector("#show");
let countryName = "";
input.addEventListener("input", function (event) {
  countryName = event.target.value;
});
button.addEventListener("click", function () {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => response.json())
    .then(([data]) => {
      document.querySelector("#name").innerText = data.name;
      document.querySelector("#region").innerText = data.region;
      document.querySelector("#subregion").innerText = data.subregion;
      document.querySelector("#capital").innerText = data.capital;
      document.querySelector("#flag").innerText = data.flag;
    })
    .catch(function () {
      alert("Не удалось найти такую страну");
    });
});
