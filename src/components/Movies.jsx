import { useEffect, useState } from "react";
import { getAllMovies } from "../helpers/getAllMovies";
import { Navbar } from "./Nabvar";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const shows = await getAllMovies();
      setMovies(shows);
    }
    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar
        data={movies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="_container_card_movie">
        {filteredMovies.map((movie) => (
          <>
            <div className="_card_movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.image} alt="" />
              <p>{movie.year}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${movie.description
                    .split(" ")
                    .slice(0, 50)
                    .join(" ")}...`,
                }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
