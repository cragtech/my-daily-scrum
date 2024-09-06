import { useState, useContext } from 'react';
import '../styles.css';
import TasksContext from './TasksContext';


function DropArea({ onDrop }) {
  const [showDropArea, setShowDropArea] = useState(false);
  const { activeCard } = useContext(TasksContext);


  return (
  <div
      className={showDropArea ? "drop-area" : "hide-drop"}

      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      onDrop={() => {
        onDrop();
        setShowDropArea(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </div>
  );

}

export default DropArea;