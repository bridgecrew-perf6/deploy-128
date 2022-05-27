import React from 'react'
import Modal from '@mui/material/Modal';
import DropZone2 from './dropZone2'


function AddNetworkModal(props) {

    const { handleOpen, handleClose, open } = props

    // for display 1


    const [showDisplay1, setDisplay1] = React.useState({ display: "flex", });

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






    return (
        <>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                style={showDisplay1}
            >




            </Modal>

            {open2 ?
                <Modal
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    style={showDisplay2}
                >
                  <div className='container_addthesis'>
                    <div className='container_add_content_top'>
                        <div className='row  addproject_heading'>
                            <div className='col-md-8 padding-left-right-zero add-project-title'>Add Project</div>
                            <div className='col-md-4 padding-left-right-zero'>
                                <img  className="card_add float-right padding-left-right-zero" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-line'></div>
                    <div className='container_add_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding circle-active'>1</span><span className="circle-name circle-active">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_two_padding'>2</span><span className="circle-name">Images</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Videos</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 addproject-upload-image-area padding-left-right-zero'>
                                <div className='thumbnail'>Add Your Images</div>
                                <ImageUploader />
                                <div className='idealSize'>Ideal Size: 120 x 654</div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div class="col-md-12 pr-0">
                                <div></div>
                                <button onClick={() => { handleClose() }} class="btn btn-outline-dark addproject-field-height-button-back float-right">BACK</button>
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

                </Modal>
                : null
            }


            { }

        </>
    );
}



export default AddNetworkModal





