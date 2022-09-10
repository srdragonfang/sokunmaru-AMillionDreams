import React  from 'react';
import './buttonlist.css';
import { IoIosAdd } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Products/StateProvider';
const ButtonList = ({id, title, description, image, price}) => {
	// const [{basket}, dispatch] = useStateValue()
	// console.log('This is the basket >>>', basket);

	// const addMovie = () => {
	// 	dispatch({
	// 		type: "ADD_TO_BASKET",
	// 		item: {
	// 			id: id,
	// 			title: title,
	// 			description: description,
	// 			image, image,
	// 			price: price

	// 		}
	// 	})
	// 	console.log(dispatch)
	// }
	return (
		<>
			<div className='banner__buttons'>
				<button
					className='banner__button--primary'
				>
					<Link className='link__button' to='trailer'>
						TRAILER
					</Link>
				</button>
				<button className='banner__button--secondary'>
					<BsFillPlayFill size={30} />
				</button>
				<button className='banner__button--secondary'
	
				>
					<IoIosAdd size={30} />
				</button>
			</div>
		</>
	);
};

export default ButtonList;
