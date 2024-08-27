import React from 'react';
import '../css/Common.css';

function Calendar() {
    return (
        <div className="g-container">
            <div className="g-month">
                <ul className="cal-ul">
                    <li className="cal-prev">&#10094;</li>
                    <li className="cal-next">&#10095;</li>
                    <li>8월</li>
                </ul>
            </div>
            <div className="g-weeks">
                <ul className="cal-ul">
                    <li>일</li>
                    <li>월</li>
                    <li>화</li>
                    <li>수</li>
                    <li>목</li>
                    <li>금</li>
                    <li>토</li>
                </ul>
            </div>
            <div className="g-days">
                <ul className="cal-ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li class="active">26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li className="next-month">1</li>
                    <li className="next-month">2</li>
                    <li className="next-month">3</li>
                    <li className="next-month">4</li>
                    <li className="next-month">5</li>
                </ul>
            </div>
        </div>
    );
}

export default Calendar;