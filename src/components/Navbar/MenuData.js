import React from 'react'
import { Link } from 'react-router-dom'
const MenuData = () => {
    return (
        <>
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>My Stuff</li>
                <li>Deals</li>
                <li><Link className="link__button" to='/signin'>Sign In</Link></li>
                <li>Help</li>
            </ul>
        </>
    )
}

export default MenuData