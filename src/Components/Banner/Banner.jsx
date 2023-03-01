import axios from '../../Axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../Request';

// const banner = 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/01/netflix-on-tv.jpg'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();

    }, []);

    console.log('IS THIS MY MOVIE???!!!!', movie);


    const cutOff = (string, number) => {
        return string?.length > number ? string.substring(0, number - 1) + '...' : string;
    }


    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            // backgroundImage: `url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/01/netflix-on-tv.jpg')`,
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }}
        >
            <div className="banner-content">
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.orginal_name}</h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-desc'>{cutOff(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />


        </header>
    )
}

export default Banner;