import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './movies.css';


import { RiTv2Line } from 'react-icons/ri';

import axios from '../../axios';


const Movies = ({id, title, fetchUrl }) => {
	const baseURL = 'https://image.tmdb.org/t/p/original/';
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(fetchUrl);

			setMovies(response.data.results);
			return response;
		}
		fetchData();
	}, [fetchUrl]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<div className='Movie__bg' id={id}>
			<div className='Movie__data'>
				<h4>
					<RiTv2Line size={20} />
					<span>{title}</span>
				</h4>
				<div className='Movie__list'>
					{movies.map((movie) => (
						<MovieItem
							image={`${baseURL}${movie.poster_path}`}
							title={
								movie?.title ||
								movie?.name ||
								movie?.original__name
							}
							rating={'⭐⭐⭐⭐'}
							description={truncate(movie?.overview, 150)}
							price={19.99}
							oldprice={21.99}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Movies;
