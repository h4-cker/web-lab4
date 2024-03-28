import React from 'react';
import TaskList from './TaskList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>To Do List</h1>
            <div className="TaskLists">
                <TaskList columnName="To do" />
                <TaskList columnName="In progress" />
                <TaskList columnName="Done" />
            </div>
        </div>
    );
};

export default App;
