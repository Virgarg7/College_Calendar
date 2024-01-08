import React, { useState } from "react";

export const DeleteScheduleEventModal = ({ schedule, onSave, onClose }) => {
    const [className, setClassName] = useState(schedule.name);
    const [classType, setClassType] = useState(schedule.type);
    const [classTime, setClassTime] = useState(schedule.timeMeridian);
    const [classLocation, setClassLocation] = useState(schedule.location);
    //const [repeat, setRepeat] = useState("");
    //const [repeatDate, setRepeatDate] = useState("");
    const [isCompletedValue, setIsCompletedValue] = useState(schedule.isCompleted);
    const [error, setError] = useState(false);
    return (
        <>
            <div id="deleteEventModal">
                <h2>Edit/Delete Event</h2>

                <input 
                    className={error ? "error" : ""}
                    value={className} 
                    onChange={e => setClassName(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Event Name (ex. Utkansh)" 
                />

                <input 
                    className={error ? "error" : ""}
                    value={classType} 
                    onChange={e => setClassType(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Event Type (ex. offline, online, hybrid)" 
                />

                <input 
                    className={error ? "error" : ""}
                    value={classTime} 
                    onChange={e => setClassTime(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Event Time (ex. 11:00 AM)" 
                />  

                <input 
                    className=""
                    value={classLocation} 
                    onChange={e => setClassLocation(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Event category (ex. academic, sports)" 
                />

                <button 
                    onClick={() => {
                        if (className && classType && classTime) {
                            setError(false);
                            onSave(className, classType, classTime, classLocation, isCompletedValue);
                        } else {
                            setError(true);
                        }
                    }}
                    id="saveButton">Save</button>

                <button onClick={onClose} id="deleteButton">Cancel</button>
            </div>

            <div id="modalBackDrop"></div>
        </>
    )
};