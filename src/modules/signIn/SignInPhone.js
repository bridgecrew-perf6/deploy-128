import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomDropdown from "./Dropdown";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MuiPhoneNumber from 'material-ui-phone-number';
import PhoneInput from "material-ui-phone-number";
import { useHistory } from 'react-router-dom';
// import OTPModal from "../../common/components/OTP/OTPModal"
import SigninOTP from "./SigninOTP";


const SignInDivMl = styled.div`
  display: contents;
  height: 100%;
  background: #FFFFFF
`;

const LogoNav = styled.div`
  padding: 26px 100px 34px 100px;
  border: 1px solid rgba(31, 31, 31, 0.1);

`;

const ImageDivMl = styled.div`  
  width: 100%;
  height: 100%;
  top: 0px;

  background: #d2d2d2;
`;
const NameDivMl = styled.div`
  width: 100%;
  height: 61px;
  left: 185px;
  top: 152px;
  margin-top:30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */

  color: #1f1f1f;
`;
const TitleDivMl = styled.p`
  // position: absolute;
  // width: 560px
  width: 100%;
  height: 21px;
  left: 185px;
  top: 218px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #1f1f1f;
`;
const PhoneDivMl = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  border: 2px solid #1f1f1f;
  box-sizing: border-box;
  border-radius: 5px;
`;


const SignInPhoneButton  = styled(Button)`
  font-size: 25px !important;
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 500 !important;
  font-family: "Inter" !important;
  font-style: normal;
  text-transform: none !important;
  color: #1F1F1F !important;
  line-height: 30px;
  background-color: #FFFFFF;
`;
const CategoryDivMl = styled.div`
  // position: absolute;
  // width: 236px;
  width: 100%;
  height: 24px;
  left: 185px;
  margin-top: 47px;
  // top: 417px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #1f1f1f;
`;
const EmailDivMl = styled.div`
 margin-top: 105px;
 font-size: 20px;`


 const ForgotDivMl = styled.a`
  color: #1F1F1F `;

const CheckDivMl = styled.div`
  // position: absolute;
  width: 273px;

  margin-top: -31px;
  margin-left: 59px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1f1f1f;
`;

const ColumnPhnMl = styled(Column)`
width:100%;`

const ForgotAltMl = styled.a`
  position: relative;
  margin-left: 344px;
  margin-top: -42px;
  color: #1F1F1F;
  text-decoration: underline;
`;
const DialogDivMl = styled.div`
width:100%`;

const PhoneAltMl = styled.a`
  position: absolute;
  right: 10px;
  top: 20px;
  color: #f24f17;
  text-decoration: underline;  `;
  
  const EmailAltMl = styled.a`
   position: absolute;
   color: #f24f17;
   top: 20px;
   text-decoration: underline;`

const PhnInput = styled.a`
      position: absolute;
      right: 10px;
      top: 20px;
  `
const PhonInput = styled(MuiPhoneNumber)`
  
`;


export default function SignInPhone(props) {
  let {state, onChangeEvent, onLoginClicked} = props;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState("")
  const history = useHistory();

  console.log(props);

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelPassword = () => {
    setPassword(!Password);
  };

  const handelSubmit = (e) => {
    setSubmitted(e.target.value);
    setModalOpen(!modalOpen);
    
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    }
  }
  

  return (
    <>
      <div>
        <LogoNav>
          <img src="../images/ml-icon.svg" alt="logo" />
        </LogoNav>
          <SignInDivMl>
            <div className="container-sm container-form">
              <NameDivMl>Sign In</NameDivMl>
              <TitleDivMl>
                Please enter your details below. SignIn using email or Phone
                Number.
              </TitleDivMl>
              <PhoneDivMl>
                <Link to="/" className="text-decoration-none"><SignInPhoneButton>Sign In using Email</SignInPhoneButton></Link>
              </PhoneDivMl>
              <CategoryDivMl>
                Choose Category*
                <CustomDropdown />
              </CategoryDivMl>
              <EmailDivMl>
                <label className="label-Email">Phone*</label>{" "}
              </EmailDivMl>
              <PhonInput
                    name="phone"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={phone}
                    
                    onChange={handlePhoneChange}
                    className="phn-input"
                  />
            
            <div className="passDiv">
              <label className="label-password">OTP*</label>
            </div>
            <input
              className="input-password"
              placeholder="OTP"
              type="text"
            />

            <div className="text-right">
            <ForgotAltMl href="#"  variant='contained'>Resend OTP</ForgotAltMl>
            <div>
            <Dialog open={open && open === "first"} >
             <DialogTitle>Forgot Password</DialogTitle>
             <DialogContent>
             <DialogContentText>
             Please input your registered email below.
           </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Email*"
             type="email"
             fullWidth
             variant="standard"
           />
             </DialogContent>
             <DialogActions>
               <PhoneAltMl  href="#" onClick={ () => setOpen("second") } variant="contained"> Use Phone Number</PhoneAltMl>
             </DialogActions>
             <DialogActions>
             <button onClick={handelSubmit} className="Pass-Submit-btn" type="submit">Continue</button>
           </DialogActions>
            </Dialog>
           
            
            <Dialog open={open && open === "second"}>
             <DialogTitle>Forgot Password</DialogTitle>
             <DialogContent>
             <DialogContentText>
             Please input your registered Phone Number below.
           </DialogContentText>
           <PhoneInput
              variant="outlined"
              margin="normal"
              value={"phone"}
              defaultCountry="in"
              regions={["europe", "asia"]}
            />
             </DialogContent>
             <DialogActions>
             <EmailAltMl  href="#" onClick={ () => {setOpen("second"); history.goBack()}} variant="contained"> Use Email</EmailAltMl>
             </DialogActions>
             <DialogActions>
             <button onClick={handelSubmit} className="Pass-Submit-btn" type="submit">Continue</button> 
             </DialogActions>
            </Dialog>
           
          </div>
            </div>
            <div className="Allset-form">
            <input type="checkbox" className="Check-mark" />
            <CheckDivMl>Remember me</CheckDivMl>
          </div>
          <div className="parent-submit">
          <button onClick={()=>{onLoginClicked()
            handelSubmit()}} className="Submit-btn" type="submit">
            CONTINUE
          </button>
          </div>
          <div>
          <p className="Account-para">
            Don't have an account?{" "}
            <Link to="/sign-up"><button className="Signup-link">
              <u>Sign Up</u>
            </button>
            </Link>
          </p>
          </div>
            </div>
           
            
          </SignInDivMl>
        
      </div>
      {/* {modalOpen && (
        <SigninOTP open={modalOpen} handleModalChange={handelSubmit} verifyPara="Verification Code"/>
      )} */}
    </>
  );
};

