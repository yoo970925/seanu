import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Style.css';
import '../css/Common.css';

function Login() {
    const navigate = useNavigate();

    // 로그인
    const login = async(e) => {
        // navigate("/main");
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, userPw })
          });
    
          const data = await response.json();
          console.log(data);
          if (response.ok) {
            // 로그인 성공
            setToken(data.token);
            setError(''); // 오류 메시지 초기화
            console.log('로그인 성공:', data);
          } else {
            // 로그인 실패
            setError(data.message);
          }
        } catch (err) {
          console.error('Error:', err);
          setError('로그인 중 오류가 발생했습니다.');
        }
    };
    
    // 비밀번호 찾기
    const findPw = () => {

    };

    // 회원가입
    const singUp = () => {
        navigate("/singUp");
    };
    
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);

    const S_01 = () => {

    };
    
    return (
        <div className="c-content">
            <form onSubmit={S_01} className="s-group">
                <div className="g-group">
                    <div className="s-item">
                        <h1>로그인</h1>
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <p className="s-title">아이디</p>
                        <input type="text" 
                            name="userid" 
                            placeholder="ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <p className="s-title">비밀번호</p>
                        <input type="password" 
                            name="userpw" 
                            placeholder="PASSWORD"
                            value={userPw}
                            onChange={(e) => setUserPw(e.target.value)}
                        />
                    </div>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <button className="btn" onClick={login}>로그인</button>
                        <button className="btn" onClick={findPw}>비밀번호 찾기</button>
                        <button className="btn" onClick={singUp}>회원가입</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;