let movies = [
  {
    title: "The Man From Earth 1",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavorite: true
  },
  {
    title: "The Man From Earth 2",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavorite: false
  },
  {
    title: "The Man From Earth 3",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavorite: true
  }
];

const search_text = document.querySelector(".search_text");

search_text.addEventListener("keydown", event => {
  if (event.keyCode == 13) {
    searchMovie();
  }
});

// Sorgu Atalım...
async function searchMovie() {
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=5a96bbee&s=${search_text.value}`
  );
  const data = await request.json();
  let movies = data.Search.map(m => {
    return {
      title: m.Title,
      description: `${m.Year}/${m.Type}`,
      imdbID: m.imdbID,
      poster: m.Poster === "N/A" ? "./assets/default.jpg" : m.Poster,
      isFavorite: true
    };
  });

  console.log("movies", movies);

  prepareMovies(movies);
}


function prepareMovies(param) {
  document.querySelector("#movies").innerHTML = "";
  param.forEach(item => {
    let movie_card = document.createElement("app-card");
    movie_card.setAttribute("title", item.title);
    movie_card.setAttribute("poster", item.poster);
    movie_card.setAttribute("isFavorite", item.isFavorite);
    movie_card.setAttribute("imdbID", item.imdbID);
    movie_card.innerHTML = item.description;
    document.querySelector("#movies").append(movie_card);
  });
}