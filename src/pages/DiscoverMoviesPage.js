import React from "react";
import { useState } from "react";
import SearchMovies from "../components/SearchMovies";
import Movie from "./Movie";

export default function DiscoverMoviesPage() {
  //   await fetch("http://www.omdbapi.com/?s=life&apikey=b3d9013d");
  const [data, set_data] = useState([]);
  console.log("HI", data);

  return (
    <div>
      {/* <h1>Movies :</h1> */}
      <SearchMovies setMovies={set_data} />
      {data.map((name) => {
        return (
          <div
            style={{
              margin: 10,
              border: "groove",
              borderColor: "white",
              borderRadius: 13,
              color: "black",
              padding: 10,
              paddingRight: 10,
              paddingBottom: 25,
              width: 500,
              // border: 5px-outset-orange
            }}
          >
            Name : {name.Title} Year : {name.Year}
            <img
              alt={name.imdbID}
              style={{
                border: "solid",
                borderColor: "black",
                borderRadius: 13,
              }}
              src={name.Poster}
            />
            <button
              onClick={console.log("click")}
              // href={`Movie/${data.imdbID}`}
            >
              Info
            </button>
          </div>
        );
      })}
    </div>
  );
}
