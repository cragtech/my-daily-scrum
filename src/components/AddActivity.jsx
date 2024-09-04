import { useState, useContext } from 'react';
import TasksContext from './TasksContext';

import {
  Button, TextField, Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel,
  Select, MenuItem, InputLabel, Typography, Container, FormHelperText,
} from '@mui/material';

// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function AddActivity() {
  const { todoList, setTodoList, setDoingList, doingList, doneList, setDoneList } = useContext(TasksContext);

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [category, setCategory] = useState('');
  const [catError, setCatError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [helperTextCat, setHelperTextCat] = useState('Please Choose One Category');
  const [helperTextMsg, setHelperTextMsg] = useState('Please Enter A Message');

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
    setMsg('');
    setCategory('');
  };
  const handleAddActivity = () => {
    if (category !== '' && msg !== '') {
      if (category === 'todoList') {
        setTodoList([...todoList, {"text": msg, "status": "todo", "listIndex": todoList.length}]);
      } else if (category === 'doingList') {
        setDoingList([...doingList, msg]);
      } else if (category === 'doneList') {
        setDoneList([...doneList, msg]);
      }
      setOpen(false);
      setCategory('');
      setHelperTextCat('Please Choose One Category');
      setHelperTextMsg('Please Enter A Message');
      setMsgError(false);
      setCatError(false);
      setMsg('');
    } else if (category === '' || msg === '') {
      if (category === '') {
        setHelperTextCat('Must Select A Category');
        setCatError(true);
      }
      if (category !== '') {
        setHelperTextCat('Please Choose One Category');
        setCatError(false);
      }
      if (msg === '') {
        setHelperTextMsg('Must Enter A Message');
        setMsgError(true);
      }
      if (msg !== '') {
        setHelperTextMsg('Please Enter A Message');
        setMsgError(false);
      }
    }
  };

  return (
    <div className="add-activity">
      <Button
        variant="outlined"
        onClick={handleDialogOpen}
      >
        Add New Activity
      </Button>
      <Dialog className="add-activity-dialog" open={open} onClose={handleDialogClose}>
        <FormControl error={msgError}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Activity"
            // placeholder="Enter Activity Description"
            placeholder="Enter Activity Description"

            type="text"
            multiline
            rows={4}
            variant="filled"
            onChange={(event) => setMsg(event.target.value)}
            required
          />
          <FormHelperText>{helperTextMsg}</FormHelperText>
        </FormControl>
        <FormControl error={catError}>
          <RadioGroup
            row
            required
          >
            <FormControlLabel
              value="todoList"
              control={<Radio />}
              label="To Do"
              onChange={(event) => setCategory(event.target.value)}
            />
            <FormControlLabel
              value="doingList"
              control={<Radio />}
              label="Doing"
              onChange={(event) => setCategory(event.target.value)}
            />
            <FormControlLabel
              value="doneList"
              control={<Radio />}
              label="Done"
              onChange={(event) => setCategory(event.target.value)}
            />
          </RadioGroup>
          <FormHelperText>{helperTextCat}</FormHelperText>
        </FormControl>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddActivity} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddActivity;
