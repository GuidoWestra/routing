import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchMovies from "../components/SearchMovies";
// import Movie from "./Movie";

export default function DiscoverMoviesPage() {
  //   await fetch("http://www.omdbapi.com/?s=life&apikey=b3d9013d");
  const [data, set_data] = useState([]);
  console.log("HI", data);

  return (
    <div>
      {/* <h1>Movies :</h1> */}
      <SearchMovies setMovies={set_data} />
      {data.map((name, i) => {
        return (
          <div
            key={i}
            style={{
              margin: 10,
              border: "groove",
              borderColor: "white",
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
            <NavLink
              style={{
                margin: 10,
                border: "solid",
                borderColor: "blue",
                borderRadius: 45,
                color: "black",
              }}
              to={`/movie/${name.imdbID}`}
              onClick={console.log("Hello")}
            >
              {" "}
              More Info
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
