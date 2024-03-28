import React from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <li className="Task">
            <span>{task.content}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default Task;
