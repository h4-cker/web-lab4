import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ columnName }) => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim() !== '') {
            const newTask = { id: Date.now(), content: inputValue.trim() };
            setTasks([...tasks, newTask]);
            setInputValue('');
        }
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="TaskList">
            <h2>{columnName}</h2>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={deleteTask} />
                ))}
            </ul>
            <div className="TaskList-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a task"
                />
                <button className="TaskList-button" onClick={addTask}>
                    Add task
                </button>
            </div>
        </div>
    );
};

export default TaskList;
