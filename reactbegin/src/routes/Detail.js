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
    console.log("test");
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
          runtime={details.runtime}
        />
      )}
    </div>
  );
}
//코드의 flow : 전체적으로 render가 한번 된다. 이때 details에는 빈 객체({})가 들어가기 떄문에 처음에는 모든 값이 undefined가 뜬다. 이때문에 .map을 했을때 빈 객체에 array의 내장함수가 쓰였기에 오류가 나는것!
//그 이후 useEffect가 실현이 되는데 그 이유는 useEffect가 componentDidMount라 렌더 이후에 메소드가 호출 도기 떄문이다,
//이에 따라 getMovie가 실행이 되고 getMovie가 API를 받아 setDetails에 넣고, state가 갱신된 setDetails가 다시 render를 하여 return에 값을 넣는다.

export default Detail;
