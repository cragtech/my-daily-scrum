import React, { useState, useEffect } from 'react';
import './styles.css';
import TitleBar from './components/TitleBar';

import AddActivity from './components/AddActivity.jsx';
import Demo from './components/Demo.jsx';
import TaskColumn from './components/TaskColumn.jsx';
import TasksContext from './components/TasksContext';

function App() {
  const [activeCard, setActiveCard] = useState({"status": null, "taskIndex": null});
  const [taskList, setTaskList] = useState([]);
  const handleDelete = (taskIndex) => {
    const newTaskList = taskList.filter((task, index) => index !== taskIndex);
    setTaskList(newTaskList);
  };

  useEffect(() => {
    console.log(taskList);
  }, ["This is Task List: " + taskList]);

  return (
    <div className="App">
      <TitleBar />
      <TasksContext.Provider value={{ handleDelete, taskList, setTaskList, activeCard, setActiveCard }}>
        <div className="task-panel-container">
          <div className="task-panel-header">
            <AddActivity />
            <Demo />
          </div>
          <div className="task-panel">
            <TaskColumn taskColumnStatus="todo" taskTitle="To Do"/>
            <TaskColumn taskColumnStatus="doing" taskTitle="Doing"/>
            <TaskColumn taskColumnStatus="done" taskTitle="Done"/>
          </div>
        </div>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
