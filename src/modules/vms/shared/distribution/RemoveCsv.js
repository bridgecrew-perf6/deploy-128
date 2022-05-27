import React from 'react'
import Modal from '@mui/material/Modal';


function RemoveCsv() {
   

    return (
        <div>
            <button className='buttons'><img className='logo' src='/icons/delete-icon.svg' height="18" width="18" alt="delete" title='delete'/></button>
            <Modal
                open={true}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className='container-remove'>
                <div className='warning_tag pad_remove'>
                    <div className='text-area'>
                        <h1 className='text-center text-spacing'>Are you sure you want to remove this file?</h1>
                    </div>
                    <div class="form-row pad">
                        <div class="col-lg-6 pad-top-remove-content">
                            <button class="field-height-dis-cancel btn btn-outline-secondary" >CANCEL</button>
                        </div>
                        <div class="col-lg-6 pad-top-remove-content">
                            <button class="field-height-dis-submit btn btn-outline-secondary">SUBMIT</button>
                        </div>
                    </div>
                </div>
                </div>
            </Modal>
        </div>
    );
}

export default RemoveCsv;
