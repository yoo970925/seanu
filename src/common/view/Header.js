import React from "react";
import Logo from '../image/seanuhana.png';
import '../css/Common.css';

function Header() {
    return (
        <div className={`c-header c-bg-000`}>
            <img src={Logo} alt='선우한아' />
        </div>
    );
}

export default Header;