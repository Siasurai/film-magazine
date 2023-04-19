import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from "../../movie-database";



export const Movie = () => {

  const { id } = useParams();
  const movieData = () => movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie">
      
    <img src={movieData().poster} alt={movieData().title}/>

    <h2>{movieData().title}</h2>

    <p>{movieData().storyline}</p>

  </div>
  )
}