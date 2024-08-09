import React from "react";
import { Link } from "react-router-dom";
import '../css/Common.css';
import mainImage from '../image/main.png';

function Main() {    
    return (
        <div className="c-content">
            <div className="c-container">
                <div className="c-group-1">
                    <img className={`c-image s-bg-000`} src={mainImage} alt='메인' />
                </div>
            </div>
            <div className="c-container">
                <div className="c-group-2">
                    <div className="g-title">
                        <text className="c-title">최근 게시글</text>
                        <Link to="/content" className="btn-link">+</Link>
                    </div>
                    <div className="g-container">
                        <div className="g-header">
                            <div class="g-col">순번</div>
                            <div class="g-col">제목</div>
                            <div class="g-col">작성자</div>
                        </div>                        
                        <div className={`g-row s-bg-000`}>
                            <div class="g-col">1</div>
                            <div class="g-col">제목1</div>
                            <div class="g-col">선우한아</div>
                        </div>
                        <div className={`g-row s-bg-000`}>
                            <div class="g-col">2</div>
                            <div class="g-col">제목2</div>
                            <div class="g-col">선우한아</div>
                        </div>
                        <div className={`g-row s-bg-000`}>
                            <div class="g-col">3</div>
                            <div class="g-col">제목3</div>
                            <div class="g-col">선우한아</div>
                        </div>
                    </div>
                </div>
                <div className="c-group-2">
                    <div className="g-title">
                        <text className="c-title">인기 게시글</text>
                        <Link to="/content" className="btn-link">+</Link>
                    </div>
                    <div className="g-container">
                        <div className="g-header">
                            <div class="g-col">순번</div>
                            <div class="g-col">제목</div>
                            <div class="g-col">작성자</div>
                        </div>                        
                        <div className="g-row">
                            <div class="g-col">1</div>
                            <div class="g-col">제목1</div>
                            <div class="g-col">선우한아</div>
                        </div>
                        <div className="g-row">
                            <div class="g-col">2</div>
                            <div class="g-col">제목2</div>
                            <div class="g-col">선우한아</div>
                        </div>
                        <div className="g-row">
                            <div class="g-col">3</div>
                            <div class="g-col">제목3</div>
                            <div class="g-col">선우한아</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;