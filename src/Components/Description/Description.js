import "../Description/Description.css";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard";

export default function Description({movies}) {

    console.log(movies.length);
    let params = useParams();
    return (
        <div className="desc">
            {  ( isNaN(params.id) || movies.length <= parseInt(params.id)) ?  <p style={{color:"red", fontSize:"20px"}}>No Movie With this id </p> :
            
            <>
            <MovieCard movie={movies[params.id]} /> 
            <iframe width="560" height="315" src={movies[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe><br></br>
            </>
            }
        </div>
    )
}
