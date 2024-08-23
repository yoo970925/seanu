import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../image/곰돌이1.png';
import '../css/Common.css';

function Login() {
    const navigate = useNavigate();

    // 로그인
    const login = () => {
        navigate("/main");
    };
    
    // 비밀번호 찾기
    const findPw = () => {

    };

    // 회원가입
    const singUp = () => {
        navigate("/singUp");
    };
    
    return (
        <div className="c-content">
            <div className="s-group">
                <div className="g-group">
                    <div className="s-item">
                        <h1>로그인</h1>
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <p className="s-title">아이디</p>
                        <input type="text" name="userid" placeholder="ID"/>
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <p className="s-title">비밀번호</p>
                        <input type="password" name="userpw" placeholder="PASSWORD"/>
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <button className="btn" onClick={login}>로그인</button>
                        <button className="btn" onClick={findPw}>비밀번호 찾기</button>
                        <button className="btn" onClick={singUp}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;