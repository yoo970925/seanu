import { Link } from 'react-router-dom';
import React from 'react';
import '../css/Common.css';

function Nav () {
    return (
        <div className={`c-navbar s-bg-100`}>
            <Link className="c-navbarMenu" to={'/'}>메인</Link>
            <Link className="c-navbarMenu" to={'/login'}>로그인</Link>
            <Link className="c-navbarMenu" to={'/notice1'}>최근 게시글</Link>
            <Link className="c-navbarMenu" to={'/notice2'}>인기 게시글</Link>
        </div>
    )
}

export default Nav;