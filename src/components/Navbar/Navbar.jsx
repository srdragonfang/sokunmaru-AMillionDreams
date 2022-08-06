import React, { useState } from 'react';
import { RiBookmark2Line, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import MenuData from './MenuData';
import Catagory from '../Movies/Catagory';
import './navbar.css';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleCatagory, setToggleCatagory] = useState(false)
    return (
        <div className="nav">
            <h4 className='nav__logo'>SOKUNMARU</h4>
            <div className='nav__menu'>
                <MenuData />
            </div>
            <div className='nav__buttons'>
                <div className="nav__catagory-btn">
                    {toggleCatagory
                        ? <RiCloseLine size={27} color="var(--color-dark)" onClick={() => setToggleCatagory(false)} />
                        : <RiBookmark2Line size={27} color="var(--color-dark)" onClick={() => setToggleCatagory(true)} />
                    }
                    {toggleCatagory && (
                        <div className='nav__catagory-popUp'>
                            <div className='nav__catagory-mobile'>
                                <Catagory />
                            </div>
                        </div>
                    )}
                </div>
                <div className="nav__menu-btn">
                    {toggleMenu
                        ? <RiCloseLine size={27} color="var(--color-dark)" onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line size={27} color="var(--color-dark)" onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='nav__menu-popUp'>
                            <div className='nav__menu-mobile'>
                                <MenuData />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar