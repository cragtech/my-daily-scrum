import React, { useContext } from 'react';
import TasksContext from './TasksContext';
import '../styles.css';
import TaskCard from './TaskCard.jsx';

import DropArea from './DropArea';


function TaskColumn({ taskColumnStatus, taskTitle }) {
  const {taskList, setTaskList, activeCard } = useContext(TasksContext);


  const onDrop = (dropStatus, position) => {
    if (activeCard["taskIndex"] === null) {
      return;
    }
    if (dropStatus === activeCard["status"]) {
      if (position === activeCard["taskIndex"]+1) {
        return;
      } else {
        const taskToMove = taskList[activeCard["taskIndex"]];
        const updatedList = taskList.filter((task, index) => index !== activeCard["taskIndex"]);
        updatedList.splice(position, 0, {
          ...taskToMove,
          "status": dropStatus,
        })
        setTaskList(updatedList);
      }
    } else if (dropStatus !== activeCard["status"]) {
      const taskToMove = taskList[activeCard["taskIndex"]];
      const updatedList = taskList.filter((task, index) => index !== activeCard["taskIndex"]);
      updatedList.splice(position, 0, {
        ...taskToMove,
        "status": dropStatus,
      })
      setTaskList(updatedList);
    }
  };

  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">{taskTitle}</div>
      <div className="task-panel-content-list">

        <DropArea onDrop={() => onDrop(taskColumnStatus, 0)} />

        {taskList.map((taskObj, index) =>
          taskObj["status"] === taskColumnStatus && (
          <React.Fragment key={index}>
            <TaskCard taskColumnStatus={taskColumnStatus} taskCurrentStatus={taskObj["status"]} taskCurrentIndex={index} taskCurrentText={taskObj["text"]}  />
            {/* <DropArea onDrop={() => onDrop()} taskStatus={taskObj["status"]} taskIndex={index + 1} /> */}
            <DropArea onDrop={() => onDrop(taskObj["status"], index + 1)} />

          </React.Fragment>
        ))}
      </div>

    </div>
  );
}

export default TaskColumn;