import React, { useEffect, useState } from 'react';
import './styles.css';
import TitleBar from './components/TitleBar';

import AddActivity from './components/AddActivity.jsx';
import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  return (
    <div className="App">
      <TitleBar />
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
        </div>
        <div className="task-panel">
          <Todo todoList={todoList} />
          <Doing doingList={doingList} />
          <Done doneList={doneList} />
        </div>
      </div>
    </div>
  );
}

export default App;
