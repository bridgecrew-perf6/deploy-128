import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Buttons = styled.div`
  display: flex;
`
const CancelButton = styled.button`

`

const YesButton = styled.button`
  
`;
export default function BasicModal(props) {


  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Replace File
          </Typography>
          <Para>
            You can replace your file with another one here. Only PDF, PNG, JPEG, and JPG are allowed
          </Para>
          <Buttons>
            <CancelButton>
              Cancel
            </CancelButton>
            <UploadButton>
              Upload
            </UploadButton>
          </Buttons>
        </Box>
      </Modal>
    </div>
  );
}
