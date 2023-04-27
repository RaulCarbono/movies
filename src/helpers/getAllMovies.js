const getAllMovies = async () => {
  const url = fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7336b4ac");
  const rest = await fetch(url);
  const data = await rest.json();

  console.log(data);
};

getAllMovies();
