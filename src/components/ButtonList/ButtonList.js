import React from 'react'
import './buttonlist.css'
import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { BsFillPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ButtonList = () => {

    return (
        <>
            <div className="Banner__buttons">
                <button className='btn__first'><Link className='link__button' to="trailer">Trailer</Link></button>
                <button className='Banner__button btn__sup' > <BsFillPlayFill size={30} /></button>
                <button className='Banner__button btn__sup'><IoIosAdd size={30} /></button>
            </div>
        </ >
    )
}

export default ButtonList