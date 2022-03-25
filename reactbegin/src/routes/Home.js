import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  //App.js에 있던 코드들이 모두 여기로 왔고(), App.js는 대신 router를 render한다.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year `
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={
                movie.summary.length > 215
                  ? `${movie.summary.slice(0, 215)}...`
                  : movie.summary
              }
              genres={movie.genres}
              year={movie.year}
              rating={movie.rating}
            /> //movie.medium_cover_image,movie.title,movie.summary,movie.genres,movie.year,movie.rating이 중괄호에 들어가는 것은 API에서 받는 data기 때문에 명확히 해줘야한다.
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
