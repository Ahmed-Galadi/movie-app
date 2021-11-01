import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';

function MovieList() {

    const movies = useSelector(getAllMovies);
    console.log(movies);

    return (
        <div>
            Movie List
        </div>
    )
}

export default MovieList
