import React from "react";

export const Schedule = ({ schedule, onClick, onSave, onDelete }) => {
    const scheduleName = `schedule ${schedule.isCompleted === true ? "isCompleted" : ""}`;
    return (
        <div className={scheduleName}>
            <div onClick={onClick}>
                <div>Name: {schedule.name}</div>
                <div>Type: {schedule.type}</div>
                <div>Timing: {schedule.timeMeridian}</div>
                <div>Category: {schedule.location}</div>
            </div>

            <div>
                <button onClick={onSave} id="editButton">Edit</button>
                <button onClick={onDelete} id="deleteEvent">–</button>
            </div>
            
        </div>
    );
};