import React, { useState, useEffect } from 'react';
import '../css/Common.css';

function Years() {
    const [years, setYears] = useState([]);

    useEffect(() => {
        const startYear = 1900;
        const endYear = new Date().getFullYear();
        const yearOptions = [];

        for (let year = endYear; year >= startYear; year--) {
            yearOptions.push(year);
        }

        setYears(yearOptions);
    }, []);
    
    return (
        <div className="s-birth">
            <select className="s-select-birth">
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <p className={`s-text`}>년도</p>
        </div>
    );
}

export default Years;