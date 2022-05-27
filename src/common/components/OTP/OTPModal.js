import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import Utils from "../../../utility"
import "./OTPModal.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '680px',
  maxHeight: '350px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
  p: 5,
  '@media screen and (max-width: 768px)' : {
    maxWidth: '80%',
    height: '30%',
    borderRadius: '10px'
  }
};

const OTPBox = styled(Box)`
    width: 100%;
    height: 32%;
    border: none !important;
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 20px !important;
    line-height: 24px !important;
    color: #1F1F1F !important;
    @media screen and (max-width: 768px) {
      
    }
`;

const VerifyPara = styled(Typography)`
  font-size: 20px !important;
  font-weight: 600;
  color: #1F1F1F;
  font-family: 'Inter' !important;
`;

const ModalDesc = styled(Typography)`
  font-size: 15px !important;
  font-weight: 300 !important;
  font-family: 'Roboto' !important;
`;

const OTPModal = styled(Modal)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export default function EmailBasicModal(props) {
  const {verifyPara,handleVerifyClick} = props;
  const [otpValues, setOtpValues] = useState({
    otp: "",
    otpError: ""
  })

  const onOtpChange = (event) => {
    setOtpValues({[event.target.name]: event.target.value})
  }

  const validateOtp = () => {
    setOtpValues({
      ...otpValues,
      otpError: (otpValues.otp === "") ? "OTP is required" : ""
    })
    return otpValues.otp;
  }
  const onOtpClicked = (event) => {
    event.preventDefault();
    if (!validateOtp()){
      return console.log("Please validate Otp");
    }
    if (validateOtp()) {
       handleVerifyClick();
    }
  }

  return (
    <div>
      <OTPModal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OTPBox sx={style}>
          <VerifyPara id="modal-modal-title" variant="h6" component="h2">
         {verifyPara}
          </VerifyPara>
          <ModalDesc id="modal-modal-description" sx={{ mt: 1.2 }}>
          An OTP is sent to your mobile number. Please input that OTP here. Please wait for minimum 5 min. If you did not recieve it then click resend button.          </ModalDesc>
          <div className={otpValues.otpError ? 'margin-error' : "email-OtpInput"}>
            <input id="otp" name='otp' className={otpValues.otpError ? "br-red" : "email-inputOtp"} value={otpValues ? otpValues.otp : ""} onChange={onOtpChange} type="text" maxLength={1} />
            <input id="otp" name='otp' className={otpValues.otpError ? "br-red" : "email-inputOtp"} value={otpValues ? otpValues.otp : ""} onChange={onOtpChange} type="text" maxLength={1} />
            <input id="otp" name='otp' className={otpValues.otpError ? "br-red" : "email-inputOtp"} value={otpValues ? otpValues.otp : ""} onChange={onOtpChange} type="text" maxLength={1} />
            <input id="otp" name='otp' className={otpValues.otpError ? "br-red" : "email-inputOtp mr-0"} value={otpValues ? otpValues.otp : ""} onChange={onOtpChange} type="text" maxLength={1} />
        </div>
        <div className='error-message'>{otpValues ? otpValues.otpError : ""}</div>
        <div className="email-verifyButtons">
            <button className='Emailverify-resendbutton'>RESEND OTP</button>
            <button className='Emailverify-verifybutton' onClick={onOtpClicked}>VERIFY</button>

        </div>
        </OTPBox>
  
      </OTPModal>
    </div>
  );
}
