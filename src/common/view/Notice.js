import React from "react";
import '../css/Common.css';

function Notice() {
    return (
        <div className="c-content">
            <div className={`g-container`}>
                <div className={`g-group`}>
                    <div className="c-title">
                        게시판
                    </div>
                    <div className="g-grid">
                        <table>
                            <thead className="g-header">
                                <tr className="g-header-row">
                                    <th className="g-col">Colunm1</th>
                                    <th className="g-col">Colunm2</th>
                                    <th className="last-col"></th>
                                </tr>
                            </thead>
                            <tbody className="g-body">
                                <tr className="g-body-row">
                                    <td className="g-col">테스트1</td>
                                    <td className="g-col">테스트2</td>
                                    <td className="last-col"></td>
                                </tr>
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
        </div>
    );
}

export default Notice;