import React, { useState, useEffect } from 'react';
import '../css/Common.css';

function BirthDate() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [days, setDays] = useState([]);

    useEffect(() => {
        // 월 변경 시 일수를 계산
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        setDays(daysArray);
      }, [selectedYear, selectedMonth]);

    const year_onChange = (e) => {
        setSelectedYear(parseInt(e.target.value, 10));
    };
    
    const month_onChange = (e) => {
        setSelectedMonth(parseInt(e.target.value, 10));
    };
    
    return (
        <div className="g-group">
            <div className="c-item">
                <select className="s-select-birth" onChange={year_onChange} value={selectedYear}>
                    {Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <p className="s-text s-text-right">년도</p>
            </div>
            <div className="c-item">
                <select className="s-select-birth" onChange={month_onChange} value={selectedMonth}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <p className="s-text s-text-right">월</p>
                <select className="s-select-birth">
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <p className="s-text s-text-right">일</p>
            </div>
        </div>
    );
}

export default BirthDate;