import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import './MovieRows.css';

function MovieRows({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_URL = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return movies;
        }

        fetchData();
    }, [fetchURL]);

    console.log('this should be the movie here======>', movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-posters'>

                {movies?.map((movie) => (
                    isLargeRow && movie.poster_path || !isLargeRow && base_URL + movie.poster_path && (

                        <img className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                            key={movie.id}
                            src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )
                ))}
            </div>

        </div>
    )
}

export default MovieRows