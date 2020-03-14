import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Movie from "./Movie";

const MovieList = props => {
  const [movies, setMovies] = useState([])
  
  // gets info from database here on first load of page.
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  // console.log(movie)
  const { title, director, metascore, stars } = movie;
  return (  
    <div className="movie-card">
      {/* Link has to interpolate the id from the match object */}
      
      <Link to={`/movies/${movie.id}`} render={(props) => {
        return <Movie />
      }}>

      {/* <Link to={`/${movie.id}`}> */}
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      {/* having trouble rendering the component when the link is pushed */}
      {/* <Route path="/:id" component={Movie}/> */}
    </div>  
  );
}

export default MovieList;
