import React, { useState } from "react";
import BirthDate from "../component/BirthDate";
import '../css/Common.css';
import '../css/Style.css';

function SingUp() {
    // 데이터
    const [formData, setFormData] = useState({
        userid: "",
        username: '',
        userpw: '',
        useremail: '',
        confirm_pw: '',
    });

    // 비밀번호 에러
    const [pwChk, setpwChk] = useState('');

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const onBlur = (e) => {
        // 비밀번호와 비밀번호 확인 필드가 변경될 때마다 오류 메시지를 업데이트
        if (e.target.name === 'userpw' || e.target.name === 'confirm_pw') {
            console.log(formData);
            if (formData.userpw !== formData.confirm_pw) {
                setpwChk('비밀번호가 일치하지 않습니다.');
            } else {
                setpwChk('');  // 비밀번호가 일치할 때 오류 메시지 제거
            }
        }
    };

    // 아이디 중복체크
    const IdChk = async() => {
        try {
            const response = await fetch(`http://localhost:5000/userIdChk?userid=${formData.userid}`);
            const data = await response.json();

            // if (data.exists) {
            //   setIsDuplicate(true);
            //   setMessage('아이디가 이미 존재합니다.');
            // } else {
            //   setIsDuplicate(false);
            //   setMessage('사용 가능한 아이디입니다.');
            // }
        } catch (error) {
            console.error('Error checking username:', error);
            // setMessage('오류가 발생했습니다. 나중에 다시 시도하세요.');
        }
    };

    // 저장 (회원가입)
    const C_01 = async (e) => {
        e.preventDefault();
        
        // 비밀번호 일치 여부 최종 확인
        if (formData.userpw !== formData.confirm_pw) {
            setpwChk('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('User registered successfully');
            } else {
                alert('Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div className="c-content">
            <form onSubmit={C_01} className="s-group">
                <h1>회원가입</h1>
                <div className="g-group">
                    <p className={`s-title s-caution`}>아이디</p>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <input className="c-input" type="text"
                            name="userid"
                            placeholder="아이디 입력(6~20자)"
                            value={formData.userid}
                            onChange={onChange}
                        />
                        <a className="btn" onClick={IdChk}>중복확인</a>
                    </div>
                </div>
                <div className="g-group">
                    <p className={`s-title s-caution`}>비밀번호</p>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <input className="c-input"
                            type="password"
                            name="userpw"
                            placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                            value={formData.userpw}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="g-group">
                    <p className={`s-title s-caution`}>비밀번호 확인</p>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <input className="c-input"
                            type="password"
                            name="confirm_pw"
                            placeholder="비밀번호 재입력"
                            value={formData.confirm_pw}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="g-group">
                    <p className={`s-title s-caution`}>이름</p>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <input className="c-input"
                            type="text"
                            name="username"
                            placeholder="이름을 입력해주세요"
                            value={formData.username}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="g-group">
                    <p className={`s-title s-caution`}>이메일</p>
                </div>
                <div className="g-group">
                    <div className="s-item">
                        <input className="c-input" 
                            type="email"
                            name="useremail"
                            placeholder="이메일 주소"
                            value={formData.useremail}
                            onChange={onChange}
                        />
                        <p className="s-text">@</p>
                        <select className="c-select">
                            <option value=""></option>
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                        </select>
                    </div>
                </div>
                <div className="g-group">
                    <p className={`s-title s-caution`}>생년월일</p>
                </div>
                <div className="g-group">
                    <BirthDate />
                </div>
                <button type="submit" className="btn">회원가입</button>
            </form>
        </div>
    );
}

export default SingUp;