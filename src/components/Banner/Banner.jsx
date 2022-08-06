import React, { useEffect, useState } from 'react';
import './banner.css';
import ButtonList from '../ButtonList/ButtonList.js';

import axios from '../../axios';
import requests from '../../request';
const Banner = () => {
	const baseURL = 'https://image.tmdb.org/t/p/original/';
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(requests.fetchNetflixOriginals);

			setMovie(
				response.data.results[
					Math.floor(Math.random() * response.data.results.length - 1)
				]
			);
			return response;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<div
			className='banner__bg'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
                    ${baseURL}${movie.backdrop_path}
                )`,
				backgroundPosition: 'center center',
			}}
		>
			<div className='banner__info'>
				<h1>{movie?.title || movie?.name || movie?.original__name}</h1>
				<div className='banner__description'>
					<p>{truncate(movie?.overview, 150)}</p>
				</div>
				<ButtonList />
			</div>
		</div>
	);
};
export default Banner;
