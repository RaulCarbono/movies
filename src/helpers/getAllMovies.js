export const getAllMovies = async () => {
  const url = "https://api.tvmaze.com/shows";
  const resp = await fetch(url);
  const data = await resp.json();

  const movies = data.map((movie) => ({
    id: movie.id,
    title: movie.name,
    image: movie.image.medium,
    rating: movie.rating.average,
    year: movie.premiered,
    description: movie.summary,
  }));

  return movies;
};
