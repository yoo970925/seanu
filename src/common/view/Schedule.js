import React from "react";
import '../css/Common.css';
import '../css/Style.css';
import Calendar from "../component/Calendar";

function Schedule() {
    return (
        <div className="c-content">
            <div className="g-container">
                <div className="c-title">
                    일정
                </div>
                <Calendar />
            </div>
        </div>
    );
}

export default Schedule;