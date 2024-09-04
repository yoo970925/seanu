import React, { useState } from "react";
import '../css/Common.css';
import '../css/Style.css';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();

    const daysInMonth = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
        daysInMonth.push(i);
    }

    const handleDateClick = (day) => {
        const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selected);
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const getDayClassName = (day) => {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayOfWeek = date.getDay();
        
        let dayClass = selectedDate && selectedDate.getDate() === day ? ' selected' : '';
        if (dayOfWeek === 6) return 'cal-day saturday' + dayClass; // 토요일
        if (dayOfWeek === 0) return 'cal-day sunday' + dayClass;   // 일요일
        return 'cal-day' + dayClass; // 다른 날
    };

    return (
        <div className="c-content">
            <div className="g-container">
                <div className="c-title">
                    캘린더
                </div>
                <div className="g-cal">
                <div className='g-cal-header'>
                    <button className="btn" onClick={prevMonth}>이전</button>
                    <h2>{currentDate.toLocaleString('ko-KR', { month: 'long', year: 'numeric' })}</h2>
                    <button className="btn" onClick={nextMonth}>다음</button>
                </div>
                <div className='cal-grid'>
                    {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                        <div key={index} className={`cal-day-name`}>{day}</div>
                    ))}
                    {Array(startDay).fill(null).map((_, index) => (
                        <div key={index} className={`cal-day empty`}></div>
                    ))}
                    {daysInMonth.map((day, index) => (
                        <div
                            key={index}
                            className={getDayClassName(day)}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
                {selectedDate && (
                    <div className="selected-date">
                        선택된 날짜: {selectedDate.toLocaleDateString('ko-KR')}
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}

export default Calendar;