import React from "react";
import { useState } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import {
//   Button,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";
import SearchMovies from "../components/SearchMovies";

export default function DiscoverMoviesPage() {
  const [data, set_data] = useState([]);

  return (
    <Container>
      <SearchMovies setMovies={set_data} />
      {data.map((name, i) => {
        return (
          <CardGroup>
            <Card>
              <Card.Img
                className="justify-content-md-center"
                style={{
                  maxWidth: "20rem",
                  border: "solid",
                  borderRadius: 22,
                }}
                variant="center"
                src={name.Poster}
              />
              <Card.Body>
                <Card.Title>{name.Title}</Card.Title>
                <Card.Text></Card.Text>

                <Button>
                  <NavLink
                    style={{ color: "white" }}
                    to={`/movie/${name.imdbID}`}
                  >
                    {" "}
                    More Info
                  </NavLink>
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{name.Year}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        );
      })}
    </Container>
  );
}
