import { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json.data.movie);

    setDetails(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  // useLayoutEffect(() => {
  //   console.log(details);
  // }, [details]);

  console.log(id);

  return (
    <div>
      {details && (
        <MovieDetails
          largeCoverImage={details.large_cover_image}
          title={details.title}
          descriptionFull={details.description_full}
          genres={details.genres}
          year={details.year}
          rating={details.rating}
        />
      )}
    </div>
  );
}

export default Detail;
