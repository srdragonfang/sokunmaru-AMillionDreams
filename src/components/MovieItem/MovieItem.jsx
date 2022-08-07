import React, { useState } from 'react'
import './movieitem.css'
import ButtonList from '../ButtonList/ButtonList'
import avatar from '../../assets/avatar/images.png'
import 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'
const MovieItem = ({image, title, description}) => {
    const [toggleTrailerPoster, setToggleTrailerPoster] = useState(false);

    return (
        <>
            <div className="MovieIem" onClick={() => setToggleTrailerPoster(true)}>
                <img className="movieItem__img" src={image} alt="movieItem__img" />
            </div>
            {toggleTrailerPoster && (
                <div className="data__popUp">
                    <div className="data__bg">
                        <div className="movieItem__bar">
                            <RiCloseLine size={27} onClick={() => setToggleTrailerPoster(false)} />
                        </div>
                        <div className="movieItem__container">
                            <div className="movieItem__info">
                                <img className="movieItem__img2" src={image} alt="movieItem__cover" />
                                <div className="movieItem__list">
                                    <h1 className="movieItem__title">{title}</h1>
                                    <div className="movieItem__description">{description}</div>
                                    <ButtonList />
                                </div>
                            </div>
                            <div className='movieItem__cast'>
                                <h3>CASTING</h3>
                                <div className="casting__data">
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>
                                    <div className="casting__item">
                                        <div className="casting__avatar">
                                            <img src={avatar} alt="casting__avatar" />
                                        </div>
                                        <p className="casting__user">unknown</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default MovieItem