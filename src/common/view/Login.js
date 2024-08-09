import React from "react";
import { useNavigate } from "react-router-dom";
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
            <div className={`c-login s-bg-001`}>
                <div className="c-item">
                    <input className="c-input" type="text" placeholder="아이디"></input>
                </div>
                <div className="c-item">
                    <input className="c-input" type="password" placeholder="비밀번호"></input>
                </div>
                <div className="c-item">
                    <button className={`btn-login s-bg-102`} onClick={main}>
                        로그인
                    </button>
                </div>
                <div className="c-item">
                    <button className={`btn-login s-bg-102`} onClick={singUp}>
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;