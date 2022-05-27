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

  const { handleCloseEdit, handleOpenEdit, openEdit } = props;



  return (
    <div>
      
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <div className='container-modal' >
            {/* form */}
            <div className='pad-modal-content'>
              <div className="row">
                <div className="col-6">
                  <div className="dis-title-modal">Edit Branch</div>
                  <div className="dis-dis-modal pt-2 hidden_dis_modal">Please input all required details below.</div>
                </div>
                <div className="col-6">
                  <div className="dis-title-modal ml-orange float-right">
                    {/* <p className='nested1' onClick={handleOpen2} ><span className='hidden_dis_modal' >Have </span>Many Branches?</p> */}
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
  );
}
