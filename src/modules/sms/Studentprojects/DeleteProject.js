import React from "react";
import Modal from "@mui/material/Modal";
import "./projectmodel.css";
import styled from "styled-components";

const DeleteButton = styled.div`
  position: absolute;
  text-decoration: none;
  background-color: none;
  background: none;
  border: none;
  font-family: inter;
  right: 0;
  top: 0;
`;

function DeleteProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteButton
        class="button_card_delete"
        onClick={() => {
          handleOpen();
        }}
      >
        <img
          className="card_cross_image"
          src="/icons/cross.svg"
          alt="Delete Card"
        />
      </DeleteButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="container_delete">
          <div className="delete_warning_tag main-pad">
            <div className="text-area">
              <p className="text-center text-spacing">
                Are you sure you want to delete your project{" "}
                <span className="ProjectName">ProjectName</span>?
              </p>
            </div>
            <div class="form-row">
              <div class="col-lg-6 pad-top-remove-action">
                <button
                  onClick={handleClose}
                  class="form-control field-height btn btn-outline-secondary text-dark action-button-label"
                >
                  CANCEL
                </button>
              </div>
              <div class="col-lg-6 pad-top-remove-action">
                <button class="form-control field-height btn btn-dark text-white action-button-label delete">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteProject;
