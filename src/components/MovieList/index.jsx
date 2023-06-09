import React from 'react';
import './style.css';
import { movies } from "../../movie-database";
import { NavLink } from 'react-router-dom';

export const MovieList = () => {

  return (
    <nav className="movie-list">
      {
        movies.map((movie) => <NavLink to={`/movies/${movie.id}`} key={movie.id}>{movie.title}</NavLink>)
      }
  </nav>
  )
}