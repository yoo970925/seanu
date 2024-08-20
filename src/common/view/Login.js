import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../image/곰돌이1.png';
import '../css/Common.css';

function Login() {
    const navigate = useNavigate();

    const main = () => {
        navigate("/main");
    };
    
    const singUp = () => {
        navigate("/singUp");
    };
    
    return (
        <div className="c-content">
            <div className="g-group">
                <div className={`g-login s-bg-100`}>
                    <img src={image1} alt='로그인' />
                </div>
                <div className={`g-login s-bg-100`}>
                    <p className="c-text">로그인</p>
                    <input type="text"></input>
                </div>
                <div className={`g-login s-bg-100`}>
                    <p className="c-text">비밀번호</p>
                    <input type="text"></input>
                </div>
                <div className={`g-login s-bg-100`}>
                    <button className="btn" onClick={main}>로그인</button>
                    <button className="btn" onClick={singUp}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default Login;