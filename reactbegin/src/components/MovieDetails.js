function MovieDetails({
  largeCoverImage,
  title,
  descriptionFull,
  genres,
  year,
  rating,
  runtime,
}) {
  return (
    <div>
      <img src={largeCoverImage} />
      <br />
      <span>year:{year}</span>
      <span> rating:{rating}</span>
      <span> runtime:{runtime}m</span>
      {console.log(title)}
      <h2>{title}</h2>
      {console.log(title)}
      <p>{descriptionFull}</p>
      {console.log(genres)}
      <ul>
        {
          genres &&
            genres.map((g) => (
              <li key={g}>{g}</li>
            )) /*위의 &&은 genres ? genres.map((g) => <li key={g}>{g}</li>) : null의 뜻과 같다.(genres가 참이면  &&다음을 실행 해라.)*/
        }
      </ul>
    </div>
  );
}

export default MovieDetails;
