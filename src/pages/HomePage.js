import React from 'react'
import Movies from '../components/Movies/Movies'
import Credits from '../components/Credits/Credits'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'

import requests from '../request';
const HomePage = () => {
    return (
        <>
            <div className="Homepage__bg">
                <Banner />
                <Navbar />
                <Movies id="originals-id" title="Sokunmaru | Originals" fetchUrl={requests.fetchNetflixOriginals} />
                <Movies id="trending-id" title="Sokunmaru | Trendings" fetchUrl={requests.fetchTrending} />
                <Movies id="comedy-id" title="Sokunmaru | Comedy" fetchUrl={requests.fetchComedyMovies} />
                <Credits />
            </div>
        </>
    )
}

export default HomePage