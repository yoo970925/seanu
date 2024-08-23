import React, { useState } from "react";
import '../css/Common.css';
import BirthDate from "../component/BirthDate";

function SingUp() {
    // 데이터
    const [formData, setFormData] = useState({
        useremail: '',
        username: '',
        userpw: '',
        confirm_pw: '',
    });

    // 이메일 에러
    const [emailChk, setEmailChk] = useState('이메일 중복확인해주세요.');

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
            <form onSubmit={C_01}>
                <div className="s-group">
                    <div className="s-item">
                        <h1>회원가입</h1>
                    </div>
                    <div className="g-group">
                        <div className="s-item">
                            <p className={`s-title s-caution`}>아이디</p>
                            <input type="text"
                                name="userid"
                                placeholder="아이디 입력(6~20자)"
                                value={formData.userid}
                                onChange={onChange}
                            />
                            <button className="btn">중복확인</button>
                        </div>
                    </div>
                    <div className="g-group">
                        <div className="s-item">
                            <p className={`s-title s-caution`}>비밀번호</p>
                            <input className="s-input"
                                type="password"
                                name="userpw"
                                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                                value={formData.userpw}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="g-group">
                        <div className="s-item">
                            <p className={`s-title s-caution`}>비밀번호 확인</p>
                            <input className="s-input"
                                type="password"
                                name="confirm_pw"
                                placeholder="비밀번호 재입력"
                                value={formData.confirm_pw}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="g-group">
                        <div className="s-item">
                            <p className={`s-title s-caution`}>이름</p>
                            <input className="s-input"
                                type="text"
                                name="username"
                                placeholder="이름을 입력해주세요"
                                value={formData.username}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="g-group">
                        <div className="s-item">
                            <p className={`s-title s-caution`}>이메일</p>
                            <div className="s-email">
                                <input className={`g-w40`}
                                    type="email"
                                    name="useremail"
                                    placeholder="이메일 주소"
                                    value={formData.useremail}
                                    onChange={onChange}
                                />
                                <p className="s-text">@</p>
                                <select className={`s-select s-select-email`}>
                                    <option value=""></option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="g-group">
                        <p className={`s-title s-caution`}>생년월일</p>
                        <div className="s-item">
                            <BirthDate />
                        </div>
                    </div>
                    <div className="g-group">
                        <button type="submit" className="btn">회원가입</button>
                    </div>
                </div>
            </form>
            {/* <form onSubmit={C_01}>
                <div className="g-group">
                    <div className="c-item">
                        <p className="c-text">이메일</p>
                        <input type="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="c-item">
                        {emailChk && <p className={`caution s-color-001`}>{emailChk}</p>}
                        <div className="g-btn">
                            <button className="btn">중복확인</button>
                        </div>
                    </div>
                    <div className="c-item">
                        <p className="c-text">이름</p>
                        <input type="text"
                            name="username"
                            placeholder="username"
                            value={formData.username}
                            onChange={onChange}
                        />
                    </div>
                    <div className="c-item">
                        <p className="c-text">비밀번호</p>
                        <input type="password"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    </div>
                    <div className="c-item">
                        <p className="c-text">비밀번호 확인</p>
                        <input type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    </div>
                    <div className="c-item">
                        {pwChk && <p className={`caution s-color-001`}>{pwChk}</p>}
                    </div>
                    <button type="submit" className="btn">회원가입</button>
                </div>
            </form> */}
        </div>
    );
}

export default SingUp;