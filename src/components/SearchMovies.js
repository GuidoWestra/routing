import React, { useState } from "react";
import Axios from "axios";

export default function SearchMovies({ setMovies }) {
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    const queryParam = encodeURI(searchText);
    console.log("param", queryParam);

    const movies = await Axios.get(
      `https://omdbapi.com/?apikey=c0b19989&s=${queryParam}`
    ).then((result) => {
      setMovies(result.data.Search);
      console.log(result);
    });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={() => search()}>Search</button>
      </p>
    </div>
  );
}
