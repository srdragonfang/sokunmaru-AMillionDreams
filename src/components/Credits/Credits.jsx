import React from 'react';
import './credit.css';

const Credits = () => {
	const today = new Date();

	return (
		<div className='credits'>
			<p>Sokunmaru Group | &copy;{today.getFullYear()}</p>
			<h4 className='credits__author'>
				<a href='https://github.com/srdragonfang'>S.R Dragonfang</a>
			</h4>
		</div>
	);
};

export default Credits;
