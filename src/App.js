import {React, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Components/Data/Data';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList/MovieList';
import FilterByName from './Components/FilterByName';
import FilterByRate from './Components/FilterByRate';
import { Route, Routes } from 'react-router-dom';
import Description from './Components/Description/Description';



function App() {
 
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInpuSearch] =useState("");
  const [rating, setRating] = useState("");
  

  const add =(newMovie)=> {
    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
    <div className='headerApp'>
    <h1>Movie App </h1>
    <div style={{display:'flex', flexDirection:"row", justifyContent:'space-between', gap:'15px'}}>
      {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
    <Routes>
    <Route path="/" element={<>
    <FilterByName inputSearch={inputSearch} setInputSearch={setInpuSearch}/>
    <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/> 
    </> } />
    </Routes>
    </div>
    </div>
    <hr />
    <Routes>
    <Route path="/" element={<> <MovieList movies={movies} inputSearch={inputSearch} rating={rating} /> 
    <AddMovie add={add}/></> }/>
    {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
    <Route path="/:id" element={ <Description movies={movies} /> } />
    </Routes>
    </div>
   
  );
}

export default App;
