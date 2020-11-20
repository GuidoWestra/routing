import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function MovieInfo(props) {
  // console.log(props);
  const [movieDetails, set_movieDetails] = useState({});
  //   const [searchTitle, set_searchTitle] = useState("");
  console.log(movieDetails);
  const search = async () => {
    const queryParam = encodeURI(props.match.params.id);
    console.log("param", queryParam);

    const movies = await Axios.get(
      `https://omdbapi.com/?apikey=c0b19989&i=${queryParam}`
    );
    // ).then((result) => {
    //   setMovies(result.data.Search);
    set_movieDetails(movies.data);
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <img
        alt={movieDetails.imdbID}
        style={{
          border: "solid",
          borderColor: "black",
          borderRadius: 13,
        }}
        src={movieDetails.Poster}
      />
      <p>
        <strong>Released on: {movieDetails.Released}</strong>
      </p>
      <p>
        <strong></strong>
      </p>
    </div>
  );
}
