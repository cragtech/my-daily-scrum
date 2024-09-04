import React, { useEffect, useState } from 'react';
import './styles.css';
import TitleBar from './components/TitleBar';

import AddActivity from './components/AddActivity.jsx';
import Demo from './components/Demo.jsx';
import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';
import TasksContext from './components/TasksContext';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="App">
      <TitleBar />
      <TasksContext.Provider value={{ todoList, setTodoList, doingList, setDoingList, doneList, setDoneList, activeCard, setActiveCard }}>
        <div className="task-panel-container">
          <div className="task-panel-header">
            <AddActivity
              todoList={todoList}
              doingList={doingList}
              doneList={doneList}
              setTodoList={setTodoList}
              setDoingList={setDoingList}
              setDoneList={setDoneList}
            />
            <Demo />
          </div>
          <div className="task-panel">
            <Todo />
            <Doing />
            <Done />
          </div>
        </div>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
