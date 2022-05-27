import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import BranchDropZone from "./branchDropZone";
import { useState } from "react";
import "./branchUploadModal.css";
import DeleteModal from "./deleteModal";

import ReplaceModal from "./replaceModal";

const MainBox = styled(Box)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 47.7vw;
height:"771px";
height: "760px !mportant";
background-color: white;
border-radius: 4px;
box-shadow: 24;
padding: 20px;
p=4;
@media only screen and (min-width: 769) and (max-width: 1366px) {
  padding: 10px;
}
@media only screen and (max-width: 768px) {
  padding: 20px;
  width: 90%;
  height: 747px;
  overflow: scroll;
}
`;

const AddButton = styled(Button)`
  color: black !important;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600 !imortant;
  font-size: 20px !important;
  line-height: 19px;

  color: #F24F17 !important;
`;


export default function BranchUploadModal(props) {
  const {haveMany , handleClosedIuload} = props

  
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
     
  ;

  const handleClose = () => setOpen(false);

  const [isFileUploaded, setIsFileUpload] = useState(true);
  const onUpload = () => {setIsFileUpload(false)
   
  };

  return (
    <div>
 
      <Modal
        open={handleOpen}

        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

       
      >
        <MainBox>
          <div className="row  pl-4 mt-3">
            <img src="/icons/back-icon.png" alt="back" />
          </div>

          <div col-md-12>
            <div className="row b-h-font pl-4 mt-3">Have Many Branches?</div>
            <div className="row branch-p-font pl-4 mt-1">
              Download our CSV file and input all your branch details in just
              minutes.
            </div>
          </div>

          <div className="col p-0">
            <div className="row pt-3 pl-4">
              <img src="/icons/download-icon.png" height="19" width="20" />{" "}
              <span className="download-csv pl-4 ">DOWNLOAD CSV FORMAT</span>
            </div>
            <div className="row upload-title pt-4 pl-4">Upload CSV here</div>
            <div className="row upload-dis pl-4">Only .CSV format is allowed</div>
          </div>

          {isFileUploaded ? 
            <div>
              <div className="row pt-1 p-4">
                <BranchDropZone />
              </div>

              <div className="row upload-btn-pad p-4 ">
                <button
                  onClick={onUpload}
                  className="upload-modal-button w-100 upload-btn-height "
                >
                  UPLOAD FILE
                </button>
              </div>
            </div>
           : 
            <div>
              <div className="row mt-2 d-flex align-items-center">
                <div className="col-md-9 col-9 border upload-btn-height  d-flex justify-content-between align-items-center">

                    <div className="">FileName.csv</div>

                    <div  d-flex justify-content-between align-items-center>
                      <img src="/icons/tick-icon.png" alt="tick" />
                    </div>
             
                </div>

                <div className="col-md-1 col-1 border upload-btn-height m-auto ">
                     <DeleteModal />
                </div>

                <div className="col-md-1 col-1 border upload-btn-height  m-auto ">
                  <ReplaceModal/>
                </div>
              </div>
            </div>
          }
          <div className="row upload-btn-pad-row">
            <div className="col-md-6 btn-pad ">
              <button className="b-cancel-button w-100 mr-1 uplaod-btn-height" onClick={handleClose}> 
                CANCEL
              </button>
            </div>

            <div className="col-md-6 btn-pad">
              <button className="b-save-button w-100  uplaod-btn-height">
                SAVE
              </button>
            </div>
          </div>
        </MainBox>
      </Modal>
    </div>
  );
}
