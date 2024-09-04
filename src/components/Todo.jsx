import React, { useContext } from 'react';
import TasksContext from './TasksContext';
import '../styles.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import DropArea from './DropArea';


function Todo() {
  const { todoList, setTodoList, activeCard, setActiveCard } = useContext(TasksContext);

  const handleDelete = (msgIndex) => {
    const newTodoList = todoList.filter((msg, index) => index !== msgIndex);
    newTodoList.forEach((msg, index) => msg.listIndex = index);
    setTodoList(newTodoList);
  };

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) {
      return;
    }
    const taskToMove = todoList[activeCard];
    const updatedList = todoList.filter((task, index) => index !== activeCard);
    updatedList.splice(position, 0, {
      ...taskToMove,
      status : status,
    })
    setTodoList(updatedList);

  };

  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">To Do</div>
      <div className="task-panel-content-list">
      {todoList.map((todoMsg) => (
          <React.Fragment key={todoMsg.listIndex}>
            {todoMsg.listIndex === 0 ? <DropArea onDrop={() => onDrop(todoMsg.status, 0)}/> : null}
            <div
              className="task-item"
              draggable
              onDragStart={() => setActiveCard(`${todoMsg.listIndex} ${todoMsg.status}`)}
              onDragEnd={() => setActiveCard(null)}
            >
              {todoMsg.text}
              <DeleteForeverIcon className="task-item-delete" onClick={() => handleDelete(todoMsg.listIndex)} />
            </div>
            <DropArea onDrop={() => onDrop(todoMsg.status, todoMsg.listIndex + 1)} />
          </React.Fragment>
        ))}
      </div>

      <p>Active Card: {activeCard}</p>

    </div>
  );
}

export default Todo;