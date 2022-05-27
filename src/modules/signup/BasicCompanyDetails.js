import React,{ useState } from "react";
import styled from "styled-components";
import CustomDropDown from "../../common/Dropdown/CustomDropDown";
import "./basic.css";

// import MuiPhoneNumber from "material-ui-phone-number";

const BasicDetailsForm = styled.div``;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 100px 34px 100px;
`;

const BasicForm = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20%;
`;

const LogoImg = styled.img``;

const LogOut = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #f24f17;
`;

const TopHead = styled.div``;

const FormContent = styled.div`
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 1350px;
`;

export default function PersonalDetailComponent({props}) {
    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        companyNameError: "",
        companyAddress: "",
        companyAddressError: "",
        pincode: "",
        pincodeError: "",
        gstin: "",
        gstinError: "",
        pan: "",
        panError: ""
    })

    const Country = ["India"]
    const States = ["Hrayana", "Tamil Nadu", "Maharashtra", "Gujarat"]
    const City = ["Gurugram","Karnal","Panipat","Hisar"]
    const GSTINStatus = ["I have a GSTIN","I will only sell in GSTIN extempt categories like stationary","I have applied/ will apply for a GSTIN "]

    const onCompanyChange = (event) => {
        setCompanyDetails({[event.target.name]: event.target.value})
    }

    const validateCompanyDetails = () => {
        setCompanyDetails({
            ...companyDetails,
            companyNameError: (companyDetails.companyName==="")? "This is a mandatory field" : "",
            companyAddressError: (companyDetails.companyAddress==="")? "This is a mandatory field" : "",
            pincodeError: (companyDetails.pincode==="")? "This is a mandatory field" : "",
            gstinError: (companyDetails.gstin==="") ? "Invalid Input. Please enter 15 digit GSTIN." : "",
            panError: (companyDetails.pan==="") ? "Invalid Input. Please enter 10 valid digits of your PAN number." : ""
        })
        return companyDetails.companyName && companyDetails.companyAddress && companyDetails.pincode && companyDetails.gstin && companyDetails.pan;
    }

    const onCompanyClicked = (event) => {
        event.preventDefault();
        if(!validateCompanyDetails()){
            return console.log("Please validate Company details")
        }

    }
  return (
    <>
      <BasicDetailsForm className="">
        <TopDiv>
          <LogoImg src="../images/ml-icon.svg" alt="logo-ml"></LogoImg>
          <LogOut>Logout</LogOut>
        </TopDiv>
        <BasicForm>
            <FormContainer>
                    <TopHead className="tophead text-center">
                        <h1>Basic Company Details</h1>
                        <p>Please enter your company details</p>
                    </TopHead>

                    <FormContent>
                        <div className="basic-content">
                            <h2>Company Name*</h2>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={companyDetails ? companyDetails.companyName: ""}
                                placeholder="Tata Steel"
                                onChange={onCompanyChange}
                                className={companyDetails.companyNameError ? "br-red": "form-control col-md-12"}
                            />
                            <div className='error-message'>{companyDetails ? companyDetails.companyNameError : ""}</div>
                        </div>
                        <div className="basic-content">
                            <h2>Registered Address*</h2>
                            <input
                                type="text"
                                id="companyAddress"
                                name="companyAddress"
                                value={companyDetails? companyDetails.companyAddress : ""}
                                placeholder="Unit, Street Address, Block Address, Area Address"
                                className={companyDetails.companyAddressError ? 'br-red': "form-control col-md-12"}
                                onChange={onCompanyChange}
                            />
                            <div className='error-message'>{companyDetails ? companyDetails.companyAddressError : ""}</div>
                        </div>

                        <div className="basic-location">
                            <div className="basic-content w-25 mr-4">
                                <h2>Country*</h2>
                                {/* <input type="text" placeholder="India" className="form-control col-md-12"/> */}
                                <CustomDropDown options={Country} width="100%"/>

                            </div>
                            <div className="basic-content w-25 mr-4">
                                <h2>State*</h2>
                                {/* <input type="text" placeholder="Haryana" className="form-control col-md-12"/> */}
                                <CustomDropDown options={States} width="100%"/>

                            </div>
                            <div className="basic-content w-25 mr-4">
                                <h2>City*</h2>
                                {/* <input type="text" placeholder="Gurugram" className="form-control col-md-12"/> */}
                                <CustomDropDown options={City} width="100%"/>

                            </div>
                            <div className="basic-content w-25">
                                <h2>Pincode*</h2>
                                <input type="text" id="pincode" name="pincode" value={companyDetails ? companyDetails.pincode : ""} onChange={onCompanyChange} placeholder="123456" className={companyDetails.pincodeError ? "br-red" : "form-control col-md-12"}/>
                                <div className='error-message'>{companyDetails ? companyDetails.pincodeError : ""}</div>
                            </div>

                        </div>
                        <div className="basic-gst w-100">
                            <div className="basic-content w-50 mr-4">
                                <h2>GSTIN Status</h2>
                                {/* <input type="text" placeholder="I have a GSTIN" className="form-control col-md-12"/> */}
                                <CustomDropDown options={GSTINStatus} width="100%"/>

                            
                            </div>
                            <div className="d-flex w-50">
                                <div className="basic-content w-50 mr-4">
                                    <h2>GSTIN*</h2>
                                    <input type="text" id="gstin" name="gstin" value={companyDetails ? companyDetails.gstin : ""} onChange={onCompanyChange} placeholder="29ABCDE1234F2Z5" className={companyDetails.gstinError ? 'br-red': "form-control col-md-12"}/>
                                
                                    <div className='error-message'>{companyDetails ? companyDetails.gstinError : ""}</div>
                                </div>
                                
                                <div className="basic-content w-50">
                                    <div className="d-flex align-items-center"><h2>PAN*</h2><h3>(Permanent Account Number)</h3></div>
                                    <input type="text" id="pan" name="pan" value={companyDetails? companyDetails.pan : ""} placeholder="AAAAA1234A" onChange={onCompanyChange} className={companyDetails.panError ? "br-red" : "form-control col-md-12"}/>
                                    <div className='error-message'>{companyDetails ? companyDetails.panError : ""}</div>

                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 w-100">
                            <button className="basic-continue p-3 col-md-8" onClick={onCompanyClicked}>CONTINUE</button>
                        </div>
                    </FormContent>
            </FormContainer>
        </BasicForm>
      </BasicDetailsForm>
    </>
  );
}

// import React from 'react';
// import styled from "styled-components";
// import "./basic.css"
// // import CountrySelector from './CountrySelector';

// const LogoNav = styled.div`
//     display: flex;
//     justify-content: space-between;
//     padding: 26px 100px 34px 100px;
//     border: 1px solid rgba(31, 31, 31, 0.1);
// `;

// const BasicDetailsComponent = styled.div`
//     ${'' /* max-width: 1250px; */}
// `;

// const BasicForm = styled.div`
//     max-width: 1250px !important;
// `;

// const BasicCompanyDetails = () => {
//   return (
//     <>
//         <div>
//             <LogoNav>
//                 <img src="../images/ml-icon.svg" alt="logo" />
//                 <button className='basicdetails-logout'>Logout</button>
//             </LogoNav>
//             <BasicDetailsComponent>
//                 <div className='d-flex justify-content-center'>
//                     <BasicForm className='container py-5 h-100 '>
//                     <div className="basic-head">
//                         <h1>Basic Company Details</h1>
//                         <p>Please enter your company details</p>
//                     </div>
//                     <div className='w-100'>
//                         <div className='basic-name'>
//                             <h2>Company Name *</h2>
//                             <input type="text"  placeholder='Tata Steel' className='form-control col w-100'/>
//                         </div>
//                         <div className='basic-name'>
//                             <h2>Registered Address *</h2>
//                             <input type="text" placeholder='Unit, Street Address, Block Address, Area Address' className='form-control col w-100'/>
//                         </div>
//                         <div className='d-flex'>
//                             <div className='basic-name'>
//                                 <h2>Country *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>State *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>City *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>Pincode *</h2>
//                                 <input type="text" placeholder='123456'/>
//                             </div>
//                         </div>

//                         <div>
//                             <div className='b'>
//                                 <h2>GSTIN Status</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='c'>
//                                 <h2>GSTIN*</h2>
//                                 <input type="text" placeholder='29ABCDE1234F2Z5' />
//                             </div>
//                             <div className='d'>
//                                 <h2>PAN*(Permanent Account Number)</h2>
//                                 <input type="text" placeholder='AAAAA1234A' />
//                             </div>
//                         </div>

//                     </div>
//                     </BasicForm>
//                 </div>
//             </BasicDetailsComponent>
//         </div>
//     </>
//   )
// }

// export default BasicCompanyDetails
