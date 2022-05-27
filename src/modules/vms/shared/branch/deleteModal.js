import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

export default function DeleteModal(props) {

  const { onhandelOpen , onhandelClose , open} = props;



  return (
    <div>
      
      <Modal
        open={open}
        onClose={onhandelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='containerRemove'>
        <div className='warning_tag'>
            <div className='text-area'>
                <p className='text-center text-spacing'>Are you sure you want to remove this file</p>
            </div>
            <div class="form-row b-pad">
                <div class="col-lg-6 pad-top-remove-content">
                    <button onClick={onhandelClose} class="form-control field-height btn btn-outline-secondary text-dark modal-button-label" >CANCEL</button>
                </div>
                <div class="col-lg-6 pad-top-remove-content">
                    <button class="form-control field-height btn btn-dark text-white modal-button-label">SUBMIT</button>
                </div>
            </div>
        </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
