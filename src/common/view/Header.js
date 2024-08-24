import React from "react";
import Logo from '../image/seanuhana.png';
import '../css/Common.css';
import '../css/Style.css';

function Header() {
    return (
        <div className={`c-header c-bg-000`}>
            <img src={Logo} alt='선우한아' className="header-img" />
        </div>
    );
}

export default Header;