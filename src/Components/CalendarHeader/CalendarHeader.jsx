import React from "react";

export const CalendarHeader = ({ onNext, onBack, dateDisplay, goToday}) => {
    return (
        <div id="header">
            <div id="monthDisplay">{dateDisplay}</div>
            <div>
                <button onClick={onBack} id="backButton">Previous month</button>
                <button onClick={goToday} id="todayButton">Current month</button>
                <button onClick={onNext} id="nextButton">Next month</button>
            </div>
        </div>
    );
};