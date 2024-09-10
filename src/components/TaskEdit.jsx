import { useState, useContext } from 'react';
import TasksContext from './TasksContext';

import { IconButton, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

function TaskEdit({ taskIndex, taskText, setTaskText }) {
  const { taskList, setTaskList } = useContext(TasksContext);
  const [updatedTaskList, setUpdatedTaskList] = useState([]);
  const [taskEditText, setTaskEditText] = useState(taskText);

  const [open, setOpen] = useState(false);

  const handleTextChange = (index, newText) => {
    setTaskEditText(newText);
    const updatedItems = taskList.map((taskObj, i) =>
        i === index ? { ...taskObj, text: newText } : taskObj
    );
    setUpdatedTaskList(updatedItems);
  };

  const handleOpen = () => {
    setOpen(true);
    setTaskEditText(taskText);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    setUpdatedTaskList([]);
  };


  const handleSave = () => {
    if (updatedTaskList.length > 0) {
      setTaskList(updatedTaskList);
    }
    setOpen(false);
  };

  return (
    <div className="demo-box">
        <EditIcon className="task-item-edit" onClick={handleOpen}/>

      <Modal className="task-edit-modal" open={open} onClose={handleClose}>

        <Box className="task-edit-modal-box">
          <IconButton className="close-icon" onClick={handleCancel}> <CloseIcon /> </IconButton>
          <div className="task-edit-textarea-div">
            <textarea
              type="text"
              className="task-edit-textarea"
              onChange={(e) => {handleTextChange(taskIndex, e.target.value)}}
              value={taskEditText}
            />

          </div>
          <IconButton className="task-edit-save-button" onClick={handleSave}> SAVE </IconButton>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskEdit;
