let url = "https:pokeapi.co/api/v2/pokemon/";
let pokemonsContainer = document.querySelector(".pokemons");
let nextPageUrl,
  prevPageUrl = "";
function showPokemons(url) {
  pokemonsContainer.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((pokemons) => {
      nextPageUrl = pokemons.next;
      prevPageUrl = pokemons.previous;
      pokemons.results.forEach((pokemon) => {
        renderPokemons(pokemon);
      });
    });
}
document.addEventListener("click", (event) => {
  if (event.target && event.target.class == "pokemon-link") {
    document.querySelector(".modal-container").style.display = "flex";
    document.querySelector(".modal__title").innerText = event.target.innerText;
    fetch(url + event.target.innerText)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(
          ".pokemon-image"
        ).src = `${data.sprites.front_default}`;
        document.querySelector(
          ".modal__description-height"
        ).innerText = `Рост: ${data.height}`;
        document.querySelector(
          ".modal__description-weight"
        ).innerText = `Вес: ${data.weight}`;
        document.querySelector(
          ".modal__description-type"
        ).innerText = `Тип: ${data.types[0].type.name}`;
      });
  }
});
document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".modal-container").style.display = "none";
});
document.querySelector(".previous").addEventListener("click", () => {
  if (prevPageUrl !== null) {
    showPokemons(prevPageUrl);
  }
});
document.querySelector(".next").addEventListener("click", () => {
  if (nextPageUrl !== null) {
    showPokemons(nextPageUrl);
  }
});
function renderPokemons(pokemonsObj) {
  let link = document.createElement("a");
  var pokemonName = document.createTextNode(pokemonsObj.name);
  link.appendChild(pokemonName);
  link.class = "pokemon-link";
  link.href = "#";
  pokemonsContainer.append(link);
}
showPokemons(url);
