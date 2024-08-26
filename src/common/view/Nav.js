import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import menu_Icon from '../image/menu.png';
import puple_Icon from '../image/brush-puple.png';
import dark_Icon from '../image/brush-dark.png';

import '../css/Common.css';
import '../css/Style.css';

function Nav ({ onSelectItem }) {
    const navigate = useNavigate();

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

    const [isOpen, setIsOpen] = useState(true);

    // 메뉴 접기,열기
    const menu_OnClick = () => {
        setIsOpen(!isOpen);
    };
    
    const [theme, setTheme] = useState('default'); // 초기 테마는 'puple'
    
    // theme이 변경될 때마다 호출되는 함수
    useEffect(() => {
        onSelectItem(theme);
    }, [theme]);

    // 테마 변경
    const theme_OnClick = () => {
        setTheme(theme === 'default' ? 'dark' : 'default');
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="g-btn">
                <button onClick={menu_OnClick} className="menu-btn">
                    <img src={menu_Icon} alt="theme" className="icon" />
                </button>
                <button onClick={theme_OnClick} className="theme-btn">
                    <img src={theme === 'default' ? puple_Icon : dark_Icon} alt="theme" className="icon" />
                </button>
            </div>
            <ul>
                <li onClick={main}>홈</li>
                <li onClick={profile}>프로필</li>
                <li onClick={schedule}>일정</li>
                <li onClick={notice}>게시판</li>
                <li onClick={login}>로그인</li>
            </ul>
        </div>
    )
}

export default Nav;