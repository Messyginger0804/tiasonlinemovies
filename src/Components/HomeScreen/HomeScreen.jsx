import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Nav/Navbar'
import MovieRows from '../MovieRows/MovieRows'
import './HomeScreen.css'
import requests from '../../Request'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />

            <MovieRows
                title='Netflix Originals'
                fetchURL={requests.fetchNetflixOriginals}
            // isLargeRow={isLargeRow}
            />
            <MovieRows
                title='Trending Now'
                fetchURL={requests.fetchTrending}
            />
            <MovieRows
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            />
            <MovieRows
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            />
            <MovieRows
                title='Top Rated'
                fetchURL={requests.fetchTopRated}
            />
            <MovieRows
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies}
            />
            <MovieRows
                title='Documentaries'
                fetchURL={requests.fetchDocumentaries}
            />



        </div>
    )
}

export default HomeScreen