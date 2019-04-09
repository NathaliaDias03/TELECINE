import React from 'react';
import "./MovieCard.scss";

const MovieCard = (props) => {
    let width = window.innerWidth;
     if (width > 768) {
    return (
        <a href="#">
            <div key={props.id} className="mx-4 d-block mb-2">
                <img alt={props.title} src={props.poster_m} className="rounded-image img-fluid mx-auto d-block  movieCard" />
                {/* <p className="movie_titulo">{props.title}</p> */}
            </div>
        </a>
    )}
    else if(width > 460){
        return(
        <a href="#">
            <div key={props.id} className="d-block mb-2 ">
                <img alt={props.title} src={props.poster_p} className="rounded-image img-fluid mx-auto d-block movieCard" />
                {/* <p className="movie_titulo">{props.title}</p> */}
            </div>
        </a>
        )
    }else{
        return(
        <a href="#">
            <div key={props.id} className="mx-2 d-block mb-2">
                <img alt={props.title} src={props.poster_p} className="rounded-image img-fluid mx-auto d-block movieCard" />
                {/* <p className="movie_titulo">{props.title}</p> */}
            </div>
        </a>
        )
    }
};

export default MovieCard;