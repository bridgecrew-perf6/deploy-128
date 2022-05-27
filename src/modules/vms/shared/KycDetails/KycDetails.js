import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "material-ui/Divider";
import Typography from "@mui/material/Typography";
import BeforeCVSUpload from "./BeforeCVSUpload";
import OrganizationDropdown from "../../../../common/Dropdown/CustomDropDown";
import "./KycDetails.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const KycBox = styled(Box)`
  ${'' /* margin-top: 39px;
  flexgrow: 1;
  width: 100%;
  height: 856px;

  @media only screen and (max-width: 1024px) {
    width: 72%; */}
    
  }
 `;
 
 export default function KycDetails(props) {
  const UserCateg= ["Manufacturer", "Vendor", "Service Provider", "Supplier"];
  const gstOptions = ["I have a GSTIN", "I will only sell in GSTIN extempt categories like stationary", "I have applied/ will apply for a GSTIN "];
  const msmeOptions = ["Yes", "No"];
  return (
    <KycBox>
      {/* <GridBox container> */}
        <Item>
          <div className="Kyc-div">
            <div className="divKyc-details">
              <p className="Kyc-details">KYC Details</p>
              <p className="sub-kyc">
                Please input requested details below. Click submit once you are
                done
              </p>
            </div>
            <button className="KycSubmit-button">SUBMIT</button>
          </div>
          <Divider />
          <Divider />
          <div className="kycForm-container">
            <div style={{width: "100%"}}>
              <form style={{ textAlign: "left", marginBottom: "85px" }}>
                {/* <div className="contactInput-div"> */}
                <label htmlFor="kycOrg-name" className="KycInput-div">
                  <h2 className="kyc-input">Organization Name *</h2>
                  <div className="kyc-OrgDiv">
                    <input
                      className="kycinput-field"
                      type="text"
                      name="name"
                      placeholder="Tata Motors"
                    />
                  </div>
                </label>

                <label htmlFor="kyc-certificate" className="KycInput-div">
                  <div className="fields-kyc">
                    <Typography variant="h6" fontWeight={600} textAlign="left">
                      Registration Certificate
                    </Typography>
                    <Typography variant="p">
                      PDF, PNG, JPEG, and JPG are allowed
                    </Typography>
                    <div className="beforeCvsUpload" style={{ width: "820px" }}>
                      <BeforeCVSUpload />
                    </div>
                  </div>
                </label>

                <label htmlFor="kycOrg-type" className="KycInput-div">
                  <p className="kyc-input">Name of Organization *</p>
                    <div className="w-100"><OrganizationDropdown options={UserCateg}/></div>

                </label>

                <label htmlFor="kyc-pan" className="KycInput-div">
                  <h2 className="kyc-input">PAN (Permanent Account Number)*</h2>
                  <input className="kycinput-field" type="text" name="name" />
                </label>

                <label htmlFor="kycGst-name" className="KycInput-div">
                  <div className="kyc-gst">
                    <div className="kyc-selectDiv mr-2">
                      <h2 className="kyc-input">GSTIN Status</h2>
                      <OrganizationDropdown options={gstOptions}/>
                    </div>
                    <div className="kyc-selectDiv ml-2">
                      <h2 className="kyc-input">GSTIN</h2>
                      <input
                        className="gstselectInput-name"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>
                </label>

                <label htmlFor="kycRegistration-name" className="KycInput-div">
                  <div className="kyc-msme">
                    <div className="kyc-selectDiv mr-2">
                      <h2 className="kyc-input">Registeration under MSME *</h2>
                        <OrganizationDropdown options={msmeOptions}/>
                    </div>
                    <div className="kyct-selectDiv ml-2">
                      <h2 className="kyc-input">MSME Number</h2>
                      <input
                        className="gstselectInput-name"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </Item>
      {/* </GridBox> */}
    </KycBox>
  );
}
