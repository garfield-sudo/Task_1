fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) => {
    data = data.sort((a, b) => b.population - a.population).splice(0, 5);
    console.log(data);
    data.forEach((element) => {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `<td><img src="${
        element.flag
      }" style="width: 100px" /></td><td style="text-align: center;">${
        element.name
      }</td><td style="text-align: center;">${
        element.capital
      }</td><td style="text-align: center;">${
        element.area
      }</td><td style="text-align: center;">${
        element.population
      }</td><td style="text-align: center;">${Math.round(
        element.population / element.area
      )} чел. на кв. км.</td>`;
      document.querySelector("table").appendChild(newRow);
    });
  });
