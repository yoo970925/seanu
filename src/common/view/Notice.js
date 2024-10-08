import React, { useEffect, useState }from "react";
import axios from 'axios';
import '../css/Common.css';
import '../css/Style.css';

function Notice() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // 서버에서 데이터 가져오기
        axios.get('http://localhost:5000/notice')
        .then(response => {
            setItems(response.data);
        })
        .catch(error => {
            console.error('데이터 가져오기 오류:', error);
        });
    }, []);

    return (
        <div className="c-content">
            <div className="g-container">
                <div className="c-title">
                    게시판
                </div>
                <div className="g-grid">
                    <table>
                        <thead className="g-header">
                            <tr className="g-header-row">
                                <th className="g-col">번호</th>
                                <th className="g-col" style={{ width : "400px"}}>제목</th>
                                <th className="g-col">작성자</th>
                                <th className="last-col"></th>
                            </tr>
                        </thead>
                        <tbody className="g-body">
                            {items.map(item => {
                                <tr className="g-body-row">
                                    <td className="g-col">{item.num}</td>
                                    <td className="g-col">{item.title}</td>
                                    <td className="g-col">{item.username}</td>
                                    <td className="last-col"></td>
                                </tr>
                            })}
                            <tr className="g-last-row">
                                <td className="g-col"></td>
                                <td className="g-col"></td>
                                <td className="last-col"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Notice;