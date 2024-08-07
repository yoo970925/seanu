import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav () {
    return (
        <div>
            <div className='navbar'>
                <Link className="navbarMenu" to={'/'}>Main</Link>
                <Link className="navbarMenu" to={'/about'}>About</Link>
                <Link className="navbarMenu" to={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}

export default Nav;