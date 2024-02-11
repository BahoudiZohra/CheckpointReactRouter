import React from 'react'
import MovieCard from '../MovieCard'
import './MovieList.css';


const MovieList = ({movies, inputSearch, rating}) => {

  return (
    <div className='movieList'>
      {movies
      .filter (
        (movie) => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())
        && 
        movie.rate >= rating
      )
    
      .map((movie, index) => (
        <MovieCard  movie ={movie} key={movie.id}/>
        ))
    }
    </div>
  );
};

export default MovieList
