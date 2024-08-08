import { Link } from 'react-router-dom';
import React from 'react';
import './Common.css';

function Nav () {
    return (
        <div className='c-navbar'>
            <Link className="c-navbarMenu" to={'/'}>Main</Link>
            <Link className="c-navbarMenu" to={'/about'}>About</Link>
            <Link className="c-navbarMenu" to={'/content'}>Content</Link>
        </div>
    )
}

export default Nav;