import { useState } from 'react';
import '../styles.css';

function DropArea({ onDrop }) {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <div
      className={showDropArea ? "drop-area-active" : "drop-area"}
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