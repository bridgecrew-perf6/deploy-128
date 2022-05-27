import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import BranchDropZone from "./branchDropZone";

const style = {
  position: "absolute",
  width: "47.7vw",
  height: "413px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const Replace = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;

const ReplacePara = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  padding: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const CancelButton = styled.button`
  width: 407px;
  height: 50px;
  left: 543px;
  top: 657px;
  background: #ffffff;
  border: 2px solid #1f1f1f;
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;

const UploadFileBtn = styled.button`
  width: 407px;
  height: 50px;
  left: 970px;
  top: 657px;
  background: #1f1f1f;
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export default function ReplaceModal(props) {

  const { onhandelOpen , onhandelClose ,open } = props

  return (
    <div>
     
      <Modal
        open={open}
        onClose={onhandelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Replace className="row p-0">Replace File</Replace>
          <ReplacePara className="row p-0">
            You can replace your file with another one here. Only PDF, PNG,
            JPEG, and JPG are allowed
          </ReplacePara>
          <BranchDropZone />

          <ButtonContainer>
            <CancelButton onClick={onhandelClose}>CANCEL</CancelButton>
            <UploadFileBtn>UPLOAD FILE</UploadFileBtn>
          </ButtonContainer>
        </Box>
      </Modal>
    </div>
  );
}
