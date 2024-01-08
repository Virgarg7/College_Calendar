import React, { useState } from "react";

export const DeleteAssignmentEventModal = ({ assignment, onSave, onClose }) => {
    const [className, setClassName] = useState(assignment.class);
    const [assignmentName, setAssignmentName] = useState(assignment.name);
    const [deadline, setDeadline] = useState(assignment.timeMeridian);
    const [isCompletedValue, setIsCompletedValue] = useState(assignment.isCompleted);
    const [error, setError] = useState(false);

    return (
        <>
            <div id="deleteEventModal">
                <h2>Edit/Delete Company:</h2>

                <input 
                    className={error ? "error" : ""}
                    value={assignmentName} 
                    onChange={e => setAssignmentName(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Company Name (ex. Microsoft)" 
                />

                <input 
                    className={error ? "error" : ""}
                    value={className} 
                    onChange={e => setClassName(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Branch Name (ex. CSE,IT)" 
                />

                <input 
                    className={error ? "error" : ""}
                    value={deadline} 
                    onChange={e => setDeadline(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Enter Year (ex. 3rd,4th)" 
                /> 

                <button 
                    onClick={() => {
                        if (assignmentName && className && deadline) {
                            setError(false);
                            onSave(assignmentName, className, deadline, isCompletedValue);
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