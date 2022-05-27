import React, { useState } from "react";
import BranchDropZone from "./branchDropZone";
import DeleteModal from "./deleteModal";
import styled from "styled-components";
import ReplaceModal from "./replaceModal";

const Button = styled.button`
  border: none;
  backgroung: #fff;
`;

const BranchUpload = () => {
  const [isUpload, setIsupload] = useState(true);

  const onUploadClick = () => {
    setIsupload(false);
  };

  const [DelOpen, setDelOpen] = useState(false);
  const onDeleteClick = () => {
    setDelOpen(true);
  };
  const onDeleteClose = () => [setDelOpen(false)];

  const [replaceOpen, setReplaceOpen] = useState(false);

  const onReplaceOpen = () => {
    setReplaceOpen(true);
  };

  const onReplaceClose = () => {
    setReplaceOpen(false);
  };

  return (
    <>
      <div>
        <div className="container-fluid pad-upload-form">
          {isUpload ? (
            <div className="col">
              <div className="row">
                <div className="col-md-6 button_download_name pl-0">
                  <span>
                    <img
                      src="/icons/download-icon.png"
                      height="19"
                      width="20"
                    />{" "}
                    DOWNLOAD CSV FORMAT
                  </span>
                </div>
                <div className="col-md-6 pr-0">
                  <button type="button" className="howbutton float-right">
                    How Does it Work?
                  </button>
                </div>
              </div>
              <div className="row upload-title"> Upload CSV here </div>
              <div className="row upload-dis"> Only .CSV format is allowed. </div>
              <div className="row">
                <BranchDropZone />
              </div>
              <div className="row">
                <button
                  type="button"
                  className="file-upload-button"
                  onClick={onUploadClick}
                >
                  UPLOAD FILE
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="row mt-2 d-flex align-items-center">
                <div className="col-md-9 col-9 border upload-btn-height  d-flex justify-content-between align-items-center">
                  <div className="">FileName.csv</div>

                  <div>
                    <img src="/icons/tick-icon.png" alt="tick" />
                  </div>
                </div>

                <div className="col-md-1 ml-3 col-1 border upload-btn-height d-flex justify-content-between align-items-center ">
                  <div>
                    <Button onClick={onDeleteClick}>
                      <img src="icons/delete-icon.png" alt="delete" />
                    </Button>
                  </div>
                </div>

                <div className="col-md-1 ml-3 col-1 border upload-btn-height  d-flex justify-content-between align-items-center">
                  <Button onClick={onReplaceOpen}>
                    <img src="/icons/edit-icon.png" alt="edit" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      {DelOpen ? (
        <DeleteModal
          onhandelOpen={onDeleteClick}
          onhandelClose={onDeleteClose}
          open={DelOpen}
        />
      ) : null}
 

      {replaceOpen ? (
        <ReplaceModal
          onhandelOpen={onReplaceOpen}
          onhandelClose={onReplaceClose}
          open={replaceOpen}
        />
      ) : null}

    </>
  );
};

export default BranchUpload;
