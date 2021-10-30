import React, { useEffect } from 'react';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey'

function Home() {

    const movieText = 'harry';

    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}`)
    //     }
    // })

    return (
        <div>
            <div className="banner-img" ></div>
            <moviesList />
        </div>
    )
}

export default Home
