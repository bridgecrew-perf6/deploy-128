import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "simple-flexbox";
import { useHistory } from "react-router-dom";
import OTPModal from "../../common/components/OTP/OTPModal";
import MuiPhoneNumber from "material-ui-phone-number";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CustomDropdown from "../../common/Dropdown/CustomDropDown";
import { Satellite } from "@mui/icons-material";

const SignUpDiv = styled.div`
  display: contents;
  width: 901px;
  height: 100%;
  background: #ffffff;
`;

const LogoNav = styled.div`
  padding: 30px 0px 22px 100px;
  @media screen and (max-width: 768px) {
    padding-left: 54px;
    img {
      width: 108px;
    }
    border-bottom: 1px solid #696969;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 54px;
    img {
      width: 118px;
    }
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;

  background: #e9e9e9;
`;
const NameDiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  color: #1f1f1f;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 45px;
  }
`;

const TitleDiv = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 80px;
  margin-top: 7px;
  @media screen and (max-width: 768px) {
    margin-top: -10px;
    margin-bottom: 0px;
    font-size: 10px;
    padding-bottom: 32px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: -5px;
    margin-bottom: 0px;
    font-size: 14px;
    padding-bottom: 32px;
  }
`;
const EmailDiv = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 1px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  left: 185px;
  top: 353px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: black !important;
    opacity: 0.8;
    margin-left: 10px;
    padding-left: 20px;
  }
  :-ms-input-placeholder {
    color: black !important;
  }
  @media screen and (max-width: 768px) {
    height: 45px;
  }
  @media screen and (max-width: 1024px) {
    height: 45px;
  }
`;
const PhoneDiv = styled.div`
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
  }
`;
const PhnDiv = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 1px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
const PhnInput = styled(MuiPhoneNumber)`
  background: #ffffff !important;
  border: 1px solid rgba(31, 31, 31, 0.5) !important;
  box-sizing: border-box !important;
  border-radius: 5px !important;
  width: 100%;
  height: 55px;

  @media screen and (max-width: 768px) {
    height: 45px;
  }
  @media screen and (max-width: 1024px) {
    height: 45px;
  }
`;

const MarginDiv = styled.div`
  width: 100%;
  margin-right: 20px;
`;
const UserDiv = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const PassDiv = styled.div`
  width: 100%;
  padding-right: 20px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`;

const ConfirmDiv = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const RemeberDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;

const Inputbox = styled.input`
  background: #ffffff;
  border: 1px solid #1f1f1f;
  box-sizing: border-box;
  border-radius: 2px;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const RemeberPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1f1f1f;
  margin-bottom: 0px !important;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 5px;
    padding-bottom: 4px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const RemeberDivPri = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const BtnContinue = styled.button`
  width: 100%;
  height: 50px;
  left: 185px;
  top: 897px;
  font-weight: 600;
  font-size: 20px;
  background: #101010;
  border-radius: 5px;
  color: white;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 15px;
  }
`;
const LastDiv = styled.div`
  text-align-last: center;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const SignPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #1f1f1f;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;

const ButtonSign = styled.button`
  color: #f24f17;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`;
const ImgSrc = styled.img`
  width: 100%;
  height: 100%;
`;

export default function SignUpComponent(props) {
  let { state, onChangeEvent, onSignupClicked,handleModalChange, handlePhoneChange } = props;
  const [phone, setPhone] = useState("");
  const [values, setValues] = useState({ password: "", showPassword: false });
  const [show, setShowP] = useState({confPassword: "", showConfPassword: false});
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  let history = useHistory();

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };


  const changeIcon = () => {
    setShowP({...show, showConfPassword: !show.showConfPassword});
  };


  function handleBlur(e) {
    console.log(e);
  }

  const handleOtpClick = () => {
    history.push("/basic-details");
  };
  
  // const handlePhoneChange = (phone) => {
  //   console.log("fdfdfdf",phone)
  //   if (phone) {
  //     setPhone(phone);
  //   }
  // };
  // const options= ["Seller", "Professional", "Student", "Institute", "Educationist"];
  // console.log(props, "props");
  return (
    <>
      <div className="overflow-hidden w-100 h-100">
        <LogoNav className="logonav">
          <img src="../images/ml-icon.svg" alt="logo" />
        </LogoNav>
        <SignUpDiv>
          <div className="container-sm col-md-8 signup-cont">
            <NameDiv>Sign Up</NameDiv>
            <TitleDiv>
              Join our community now. Please enter your details below.{" "}
            </TitleDiv>
            <EmailDiv>Email*</EmailDiv>
            <EmailInput
              placeholder="fullname@gmail.com"
              id="email"
              value={state ? state.email : ""}
              onChange={onChangeEvent}
              className={state.emailError ? "email-error" : ""}
            ></EmailInput>
            <div className="fc-red">{state ? state.emailError : ""}</div>
            <PhoneDiv>
              <MarginDiv>
                <PhnDiv>Phone*</PhnDiv>
                <PhnInput
                  id="phone"
                  name="phone"
                  required
                  data-cy="user-phone"
                  defaultCountry={"in"}
                  value={state? state.phone : ""}
                  onChange={handlePhoneChange}
                  className= {state.phoneError? "br-red": "phn-input"}
                />
                <div className="fc-red">{state ? state.phoneError : ""}</div>
              </MarginDiv>
              <UserDiv>
                <PhnDiv>Choose User Role*</PhnDiv>
                <CustomDropdown  options={props.options}
                    handleInput={props.handleType} width={"100%"}/>
              </UserDiv>
            </PhoneDiv>
            <PhoneDiv>
              <PassDiv>
                <PhnDiv>Choose Password*</PhnDiv>

                <input
                  id="password"
                  name="password"
                  className={
                    state.passwordError ? "password-error" : "password-out padding-20"
                  }
                  type={values.showPassword ? "text" : "password"}
                  value={state ? state.password : ""}
                  onChange={onChangeEvent}
                  placeholder="***************"
                />

                <span
                  toggle="#password-field"
                  className="field-icon toggle-password"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </span>
                <div className="fc-red">{state ? state.passwordError : ""}</div>
              </PassDiv>
              <ConfirmDiv>
                <PhnDiv>Confirm Password*</PhnDiv>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={show.showConfPassword ? "text" : "password"}
                  className=
                    {state.confirmPasswordError
                      ? "password-error"
                       : "form-control padding-20"
                    }
                  value={state ? state.confirmPassword : ""}
                  onChange={onChangeEvent}
                  placeholder="abcd1234@34"
                />
                <span
                  toggle="#password-field"
                  className="field-icon toggle-password"
                  onClick={changeIcon}
                >
                  {show.showConfPassword ? <Visibility /> : <VisibilityOff />}
                </span>
                <div className="fc-red">{state ? state.confirmPasswordError : ""}</div>
              </ConfirmDiv>
            </PhoneDiv>
            <div>
              <p className="valid-msg">
                Min 8 characters. Atleast one capital & one small letter, one
                numeric, and one special character. Eg: Ab123@567
              </p>
            </div>
            <RemeberDiv>
              <Inputbox type="checkbox" />
              <RemeberPara>Remember Me</RemeberPara>
            </RemeberDiv>
            <RemeberDivPri>
              <Inputbox type="checkbox" />
              <RemeberPara>
                I agree all <u>Terms & Conditions</u> and our{" "}
                <u>Privacy Policy</u>
              </RemeberPara>
            </RemeberDivPri>
            <div>
              <BtnContinue onClick={onSignupClicked}>CONTINUE</BtnContinue>
            </div>
            <LastDiv>
              <SignPara>
                Already have an account? <ButtonSign>SignIn</ButtonSign>{" "}
              </SignPara>
            </LastDiv>
          </div>
        </SignUpDiv>
      </div>
      {state.otpModalOpen && (
        <OTPModal
          open={state.otpModalOpen}
          
          handleModalChange={handleModalChange}
          handleVerifyClick={handleOtpClick}
          verifyPara="Please verify your phone number"
        />
      )}
    </>
  );
}
