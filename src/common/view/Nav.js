import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import menu_Open from '../image/menu-open.png';
import menu_Close from '../image/menu-closed.png';
import puple_Icon from '../image/brush-puple.png';
import dark_Icon from '../image/brush-dark.png';

import '../css/Common.css';
import '../css/Style.css';

function Nav () {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(true);
    // 메뉴 접기,열기
    const menu_OnClick = () => {
        setIsOpen(!isOpen);
    };

    const [theme, setTheme] = useState('puple'); // 초기 테마는 'puple'
    
    // 테마 변경
    const theme_OnClick = () => {
        setTheme((prevTheme) => (prevTheme === 'puple' ? 'dark' : 'puple'));
    };

    // 회원가입
    const main = () => {
        navigate("/");
    };

    const profile = () => {
        navigate("/Profile");
    };

    const schedule = () => {
        navigate("/Schedule");
    };

    const notice = () => {
        navigate("/Notice");
    };

    const login = () => {
        navigate("/Login");
    };

    return (
        <div className={`Navbar ${theme}`}>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <button onClick={menu_OnClick} className="menu-btn">
                    <img src={isOpen ? menu_Open : menu_Close} alt="theme" className="icon" />
                </button>
                <button onClick={theme_OnClick} className="theme-btn">
                    <img src={theme === 'puple' ? puple_Icon : dark_Icon} alt="theme" className="icon" />
                </button>
                <ul>
                    <li onClick={main}>홈</li>
                    <li onClick={profile}>프로필</li>
                    <li onClick={schedule}>일정</li>
                    <li onClick={notice}>게시판</li>
                    <li onClick={login}>로그인</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;