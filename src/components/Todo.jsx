import React, { useContext } from 'react';
import TasksContext from './TasksContext';
import '../styles.css';

function Todo() {
  const { todoList, setTodoList } = useContext(TasksContext);
  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">To Do</div>
      <div className="task-panel-content-list">
        {todoList.map((todoMsg) => (
          <ul className="task-item" draggable="true">{todoMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Todo;