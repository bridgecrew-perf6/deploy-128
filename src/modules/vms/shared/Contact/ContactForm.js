import React, { useState } from "react";
import "./ContactForm.css";
import MuiPhoneNumber from "material-ui-phone-number";
import OTPModal from "../../../../common/components/OTP/OTPModal"
import styled from "styled-components";

const PhnInput = styled(MuiPhoneNumber)`
background: #FFFFFF !important;
    border: 1px solid rgba(31, 31, 31, 0.5) !important;
    box-sizing: border-box !important;
    border-radius: 5px !important;
    width: 100%;
height: 55px;
`;

const ContactForm = ({
  showEmail,
  showContactNumber,
  addEmail,
  addContactNumber,
}) => {
  const [phone, setPhone] = useState("");
  const [otpModalChange, setOtpModalChange] = useState(false);
  const [optModalPhoneopen, setOtpModalPhoneopen] = useState(false);

  const handlePhoneChange = (phone) => {
    if (phone) {
      setPhone(phone);
    }
  };

  const handleOtpModal = () => {
    setOtpModalChange(!otpModalChange);
    
  }
  const handleOTPphoneModal = () => {
    setOtpModalPhoneopen(!optModalPhoneopen);
    
  }
  return (
    <>
      <form className="container-fluid sm-container pl-0">
        <div>
        <div className="col pl-0">
          <label htmlFor="contactName" className="contact-font">
            Contact Name*
          </label>
          <div className="form-row">
            <div class="form-group col-md-4">
              <input
                title="First Name"
                type="email"
                className="form-control padding-20"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control padding-20"
                id="lsatName"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="col-md-8 pl-0 m-t-15">
          <div className="d-flex justify-content-between">
            <label htmlFor="contactName" className="contact-font">
              Email ID*
            </label>
            <button className="add-alternate" onClick={addEmail}>
              + RECOVERY EMAIL
            </button>
          </div>
          <input
            type="password"
            className="form-control col w-100 padding-20"
            id="primaryEmail"
            placeholder="fullname@gmail.com"
          />
          {showEmail && (
            <div className="d-flex w-100 email-toppadding">
              <span className="w-100 mr-2">
                <input
                  className="form-control col mw-98 padding-20"
                  type="text"
                  name="name"
                  id="sedondaryEmail"
                  placeholder="fullname@gmail.com"
                />
              </span>
              <span>
                <button onClick={handleOtpModal} className="verifyemail-button">VERIFY</button>
              </span>
              <span className="contact-delIcon">
                <img
                  src="/icons/delete-icon.svg"
                  style={{ width: "25px" }}
                  alt="delete-icon"
                />
              </span>
            </div>
          )}
        </div>

        <div className="col-md-8 pl-0 mt-4">
          <div className="d-flex justify-content-between pt-2">
            <label htmlFor="contactName" className="contact-font">
              Contact Number*
            </label>
            <button className="add-alternate" onClick={addContactNumber}>
              + RECOVERY PHONE
            </button>
          </div>
          <div className="form-row row-md-8">
            <div class="form-group col-md">
              <PhnInput
                name="phone"
                data-cy="user-phone"
                defaultCountry={"in"}
                value={phone}
                onChange={handlePhoneChange}
                className="phn-input width-primaryphone padding-20"
              />
              {showContactNumber && (
                <div className="form-group col-md w-100 p-0 d-flex email-toppadding phone-margin-top">
                  <span className="col-md p-0 mr-2">
                    <PhnInput
                      name="phone"
                      data-cy="user-phone"
                      defaultCountry={"in"}
                      value={phone}
                      onChange={handlePhoneChange}
                      className="phn-input padding-20"
                    />
                  </span>
                  <span>
                    <button onClick={handleOTPphoneModal} className="verifyemail-button">VERIFY</button>
                  </span>
                  <span className="contact-delIcon">
                    <img
                      src="/icons/delete-icon.svg"
                      style={{ width: "25px" }}
                      alt="delete-icon"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col pl-0 mt-3">
          <label htmlFor="contactName" className="contact-font">
            Address*
          </label>
          <input
            type="text"
            className="form-control col-md-8 padding-20"
            id="contactAddress"
            placeholder="#Flat No, Block, Street, Area "
          />

          <div className="form-row mt-2">
            <div class="form-group col-md-4">
              <input
                title="First Name"
                type="email"
                className="form-control padding-20"
                id="country"
                placeholder="Country"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control padding-20"
                id="state"
                placeholder="Haryana"
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div class="form-group col-md-4">
              <input
                title="Foirst Name"
                type="email"
                className="form-control padding-20"
                id="city"
                placeholder="Gurugram"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control padding-20"
                id="pincode"
                placeholder="123456"
              />
            </div>
          </div>
        </div>
        </div>
      </form>
      {otpModalChange && (
        <OTPModal open={otpModalChange} verifyPara="Please verify your secondary email"/>
      )}
      {optModalPhoneopen && (
        <OTPModal open={optModalPhoneopen}  verifyPara="Please verify your secondary phone number"/>
      )}
    </>
  );
};

export default ContactForm;
