import React from 'react';
import './App.css';
import Inputs from './components/Inputs/Inputs';
import TaskList from './components/TaskList/TaskList';

function App() {
    return (
        <div className="App">
            <Inputs />
            <TaskList />
        </div>
    );
}

export default App;
