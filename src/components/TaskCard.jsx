import { useContext } from 'react';
import TasksContext from './TasksContext';
import '../styles.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TaskEdit from './TaskEdit';


function TaskCard({taskCurrentText, setTaskText, taskCurrentIndex, taskCurrentStatus }) {
  const {setActiveCard, taskList, setTaskList, handleDelete } = useContext(TasksContext);

  const handleTextChange = (index, newText) => {
    const updatedItems = taskList.map((taskObj, i) =>
        i === index ? { ...taskObj, text: newText } : taskObj
    );
    setTaskList(updatedItems);
  };

  return (
    <div
      className="task-item"
      draggable
      onDragStart={() => setActiveCard({"status": taskCurrentStatus, "taskIndex": taskCurrentIndex})}
      onDragEnd={() => setActiveCard({"status": null, "taskIndex": null})}
    >
    <div className="task-item-text-box">{taskCurrentText}</div>

    <div className="task-item-icons">
      <TaskEdit taskIndex ={taskCurrentIndex} taskText={taskCurrentText} setTaskText={setTaskText} />
      <DeleteForeverIcon className="task-item-delete" onClick={() => handleDelete(taskCurrentIndex)} />
    </div>

    </div>
  );
}

export default TaskCard;