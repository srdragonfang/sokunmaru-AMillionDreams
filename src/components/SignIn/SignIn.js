import React, { useEffect, useState } from 'react';
import './signin.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import axios from '../../axios';
import requests from '../../request';

const SignIn = () => {

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

    return (
        <>
            <div class="signin__bg"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
                    ${baseURL}${movie.backdrop_path}
                )`,
				backgroundPosition: 'center center',
			}}
            >
                <div class="signin__container">
                    <form>
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <button type="submit">SUBMIT</button>
                        <div class="support">
                            <p>Forget Password?</p>
                            <p>Need An Account?</p>
                        </div>
                    </form>
                    <Link className='link__button' to="/" ><MdOutlineKeyboardBackspace size={30} /></Link>
                </div>
            </div>
        </>
    )
}

export default SignIn