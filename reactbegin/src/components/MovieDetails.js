function MovieDetails({
  largeCoverImage,
  title,
  descriptionFull,
  genres,
  year,
  rating,
}) {
  return (
    <div>
      <img src={largeCoverImage} />
      <br />
      <span>year:{year}</span>
      <span> rating:{rating}</span>
      <h2>{title}</h2>
      <p>{descriptionFull}</p>
      {console.log(genres)}
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

export default MovieDetails;
