import React from 'react'
import Modal from '@mui/material/Modal';
import BranchDropZone from './branchDropZone';
import DeleteModal from './deleteModal'

function AddBranchModal(props) {

  const { handleOpen, handleClose, open } = props

  // for display 1


  const [showDisplay1, setDisplay1] = React.useState({ display: "flex", TransitionEvent: 'ease-in' });

  const handleHideDisplay1 = () => {
    setDisplay1({ display: "none" });
  };

  const handleShowDisplay1 = () => {
    setDisplay1({ display: "flex" });
  };




  // for display 2




  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
    handleHideDisplay1()
  };


  const handleclose2 = () => {
    setOpen2(false);
    handleShowDisplay1()
  };


  const [showDisplay2, setDisplay2] = React.useState({ display: "flex", TransitionEvent: 'ease-in' });

  const handleHideDisplay2 = () => {
    setDisplay2({ display: "none" });
  };

  const handleShowDisplay2 = () => {
    setDisplay2({ display: "flex" });
  };


  // for display 3

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
    handleHideDisplay2()
  };


  const handleclose3 = () => {
    setOpen3(false);
    handleShowDisplay2()
  };


  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };








  return (
    <>
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          style={showDisplay1}
        >

          <div className='container-modal' >
            {/* form */}
            <div className='pad-modal-content'>
              <div className="row">
                <div className="col-6">
                  <div className="dis-title-modal">Add New Branch</div>
                  <div className="dis-dis-modal pt-2 hidden_dis_modal">Please input all required details below.</div>
                </div>
                <div className="col-6">
                  <div className="dis-title-modal ml-orange float-right">
                    <p className='nested1' onClick={handleOpen2} ><span className='hidden_dis_modal' >Have </span>Many Branches?</p>
                  </div>
                </div>
              </div>

              <form className='row'>
                <div className='col-12 scroll_modal'>
                  <div className="row pad-top-modal-content">
                  <div className="col-md-12">
                    <label className='modal-label'>Branch Contact Person Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-6">
                      <input type="email" class="form-control field-height-dis" placeholder="Firm Name" />
                    </div>
                    <div className="col-md-6">

                      <input type="password" className="form-control field-height-dis" placeholder="Network type" />
                    </div>
                  </div>

                  {/* <div className="row pad-top-modal-content">
                    
                  </div> */}

                  <div className="row pad-top-modal-content">
                    <div className="col-md-12">
                      <label className='modal-label'>Email ID*</label>
                      <input type="email" className="form-control field-height-dis" placeholder="fullname@gmail.com" />
                    </div>
                  </div>

                  <div className="row pad-top-modal-content">
                    <div className="col-md-12">
                      <label className='modal-label'>Contact Number*</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <input className="input-group-text dis-field-phone" placeholder="+91" />
                        </div>
                        <input type="number" className="form-control field-height-dis" placeholder="99999 99999" />
                      </div>
                    </div>
                  </div>

                  <div className="row pad-top-modal-content">
                    <div class="col-md-12">
                      <label className='modal-label'>Branch Address*</label>
                      <input type="text" class="form-control field-height-dis" placeholder="#Flat No, Block, Street, Area" />
                    </div>
                  </div>
                  <div class="row pad-top-modal-content">
                    <div class="form-group col-lg-6">
                      <select class="form-control field-height-dis">
                        <option selected>Country</option>
                        <option>india</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-6">
                      <select class="form-control field-height-dis">
                        <option selected>State</option>
                        <option>Haryana</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <select class="form-control field-height-dis">
                        <option selected>City</option>
                        <option>Faridabad</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-6">
                      <input type="number" class="form-control field-height-dis" placeholder="12345" />
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <div className="form-row">
                    <div className="col-lg-6 pad-top-modal-content">
                      <button onClick={handleClose} className="field-height-dis-cancel btn btn-outline-secondary " >CANCEL</button>
                    </div>
                    <div className="col-lg-6 pad-top-modal-content">
                      <button className="field-height-dis-submit btn btn-dark">SUBMIT</button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
            {/* form */}
          </div>
        </Modal>
      </div>
      {open2 ?
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          style={showDisplay2}
        >
          <div className='container-modal'>
            <div className='pad-modal-content'>
              {/* <div className="form-row"> */}

              <div className="row">
                <div className="col-md-12">
                  <div className="modal-deatils1"><img onClick={handleclose2} className='logo' src='/icons/back-icon.svg' height="18" width="18" /></div>
                </div>
              </div>

              <div className="row model2-pad">
                <div className="col-md-12">
                  <div className="dis-title-modal">Have Many Branches?</div>
                </div>

                <div className="col-md-12 hidden_dis_modal">
                  <p className="dis-dis-modal">Download our CSV file and input all your network details in just minutes.</p>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <div className='field-height button_download_name ml-orange'><img className='logo' src='/icons/download-icon.png' height="24" width="24" /> DOWNLOAD CSV FORMAT</div>
                </div>
              </div>

              <div className="row upload-csv-margin-top">
                <div className="col-md-12">
                  <div className="modal-deatils1 py-1 dis-dis">Upload CSV here</div>
                </div>

                <div className="col-md-12">
                  <div className="modal-branch1 ">Only .CSV format is allowed</div>
                </div>
              </div>


              <div className='form-row'>
                <div className='col-12'><BranchDropZone /></div>
              </div>


              <div className='form-row upload-file-margin-top'>
                <div className='col-12'><button onClick={handleOpen3} type="button" class="btn btn-dark modal_upload">UPLOAD FILE</button></div>
              </div>



              <div className="row"><div className="modal-orline-havemany-upload"></div></div>

              <div class="form-row">
                <div class="col-lg-6 pad-top-modal-content">
                  <button onClick={handleClose} class="field-height-dis-cancel btn btn-outline-secondary" >CANCEL</button>
                </div>
                <div class="col-lg-6 pad-top-modal-content">
                  <button class="field-height-dis-submit btn btn-dark text-white">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        : null
      }

      {open3 ?
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <div className='container-modal'>
            <div className='pad-modal-content'>
              <div className="row">
                <div className="col-md-12">
                  <div className="modal-deatils1"><img onClick={handleclose3} className='logo' src='/icons/back-icon.svg' height="18" width="18" /></div>
                </div>
              </div>

              <div className="row model2-pad">
                <div className="col-md-12">
                  <div className="dis-title-modal">Have Many Branches?</div>
                </div>

                <div className="col-md-12 hidden_dis_modal">
                  <p className="dis-dis-modal modal-branch1 ">Download our CSV file and input all your network details in just minutes.</p>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <div className='field-height button_download_name ml-orange'><img  className='logo' src='/icons/download-icon.png' height="24" width="24" /> DOWNLOAD CSV FORMAT</div>
                </div>
              </div>

              <div className="row upload-csv-margin-top">
                <div className="col-md-12">
                  <div className="modal-deatils1 py-1 dis-dis">Upload CSV here</div>
                </div>

                <div className="col-md-12">
                  <div className="modal-branch1 ">Only .CSV format is allowed</div>
                </div>
              </div>



              <div className='form-row'>
                <div className="col input-group pt-1">
                  <input type="text" className="form-group form-control field-height-dis-csv" placeholder="fileName.csv" required />
                  <div className="input-group-prepend">
                    <button className="check-modal-button"><img className='logo' src='/icons/tick-icon.png' height="10px" width="10px" /></button>
                  </div>
                  <div className="input-group-prepend">
                    <button className="delete-modal-button"><img onClick={handleOpenDelete} className='logo' src='/icons/delete-icon.svg' height="10px" width="10px" /></button>
                  </div>
                  <div className="input-group-prepend">
                    <button className="edit-modal-button"><img className='logo' src='/icons/edit-icon.svg' height="10px" width="10px" /></button>
                  </div>
                </div>
              </div>



              {/* <div className='modal-orline'></div> */}
              <div className="row"><div className="modal-orline-havemany-filename"></div></div>
              <div class="form-row">
                <div class="col-lg-6 pad-top-modal-content">
                  <button onClick={handleClose} class="field-height-dis-cancel btn btn-outline-secondary" >CANCEL</button>
                </div>
                <div class="col-lg-6 pad-top-modal-content">
                  <button class="field-height-dis-submit btn btn-dark">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        : null
      }
      {openDelete ? <DeleteModal handleCloseDelete={handleCloseDelete} handleOpenDelete={handleOpenDelete} openDelete={openDelete}  /> : null}
    </>

  );
}



export default AddBranchModal





