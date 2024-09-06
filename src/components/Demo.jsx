import { useState } from 'react';

import { Button, IconButton, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Demo() {
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="demo-box">
      <Button
        variant="outlined"
        onClick={handleOpen}
      >
        Demo
      </Button>
      <Modal className="demo-modal" open={open} onClose={handleClose}>

        <Box className="demo-modal-box">
          <IconButton className="close-icon" onClick={handleClose}> <CloseIcon /> </IconButton>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export default Demo;
