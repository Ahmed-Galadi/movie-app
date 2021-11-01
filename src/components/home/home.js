import React, { useEffect } from 'react';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey';
import MoviesList from '../moviesList/movieList';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {

    const movieText = 'harry';
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                                    .catch((error) => {
                                        console.log(`Error: ${error.message}`)
                                    });
                    dispatch(addMovies(response.data));
        };
        fetchMovies();
    }, [dispatch])

    return (
        <div>
            <div className="banner-img" ></div>
            <MoviesList />
        </div>
    )
}

export default Home
