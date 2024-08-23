import React, { useState, useEffect } from 'react';
import '../css/Common.css';

function Month() {
    return (
        <div className="s-birth">
            <select>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <p className={`s-text`}>월</p>
        </div>
    );
}

export default Month;