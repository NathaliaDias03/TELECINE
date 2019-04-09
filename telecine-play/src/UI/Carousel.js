import React, { Component } from "react";
// import jQuery from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import MovieCard from "./MovieCard";
// import populares from "../data";


class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            movies: null
        }
    }

    componentDidMount() {
    }

    renderList() {
        const populares = require('../populares.json');
        // console.log('[-- typeof populares --]', typeof populares); // object
        /*const movies = populares.data.map(item => {
            return { uri: item };
        });

        console.log(movies);*/

        return populares.data.map((movie) => {
            return (
                /*<div key={movie.id}>
                    <img alt="job" src={movie.poster_p} className="" />
                    <p className="movie_titulo">{movie.title}</p>
                </div>*/
                <MovieCard id={movie.id} title={movie.title} poster_p={movie.poster_p} poster_m={movie.poster_m} poster_g={movie.poster_gg} wallpaper=""></MovieCard>
            );
        });
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            slidesToShow: 3,
            infinite: true,
            dots: true,
            autoplay: true,
            adaptativeHeight: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            centerPadding: "40px",
            speed: 500,
            initialSlide: 0
            /*responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        centerPadding: "60px",
                        speed: 500,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        centerPadding: "60px",
                        speed: 500,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        centerPadding: "120px",
                        speed: 500,
                        initialSlide: 0,
                    }
                }
            ]*/
        };

        return (
            <div className="text-center mx-auto slider">
                <Slider {...settings}>
                    {this.renderList()}
                </Slider>
            </div>
        );
    }
}

export default Carousel;