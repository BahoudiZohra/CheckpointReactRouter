import React from 'react';
// import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MovieRating from './Rating';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const MovieCard = ({movie,index}) => {
 
return (

    <div style={{alignContent:'center', margin:'10px'}}>
      <Card style={{ width: '18rem', height:'55rem'}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating isMovieRating={true} movieRating={movie.rate} /><br/><br/>
        <Button variant='danger'><Link key={movie.id} to={"/"+movie.id} style={{textDecoration:"none", color:"white"}}>Trailer</Link></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard

