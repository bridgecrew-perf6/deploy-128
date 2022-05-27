import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DistributionUpload from "./DistributionUpload";
import { Link } from "react-router-dom";



const AccordionBox = styled(Accordion)`
box-shadow:none !important;
width:100%;
`;


const AccordionSummaryBox = styled(AccordionSummary)`
height:94px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;

@media only screen and (max-width:1536px) {
height:65px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
}

@media only screen and (max-width:1366px) {
height:66px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
}

@media only screen and (max-width:928px) {
height:84px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
}

`;


const AccordionDetailsBox = styled(AccordionDetails)`
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-top:0px;
border-radius:10px;
border-top-left-radius:0px;
border-top-right-radius:0px;
`;


export default function DistributionNetwork() {


  const [expanded, setExpanded] = React.useState('panel2');
  const [changeBackground, setChangeBackground] = React.useState('panel2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setChangeBackground(isExpanded ? panel : false)
  };



  return (
    <>
      <div className="container-fluid dis-container">
        <div className="container-main-pms">
          {/* heading */}
          <div className="row pad_pms">
            <div className="col-8">
              <div className="row dis-title">Distribution Network</div>
              <div className="row"><div className="DistributionHeadline"></div></div>
            </div>
            <div className="col-4 pr-0">
              <Link to="distributionData"><button type="button" className="SubmitTopButtonDis float-right">SUBMIT</button></Link>
            </div>

          </div>
          {/* heading */}



          <div className="row pms_sub_heading">Please input requested details below. Click submit once you are done.</div>

          {/* accordian */}
          <div className="row pad-bottom">
            <AccordionBox expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
              <AccordionSummaryBox
                style={changeBackground === "panel1" ? { backgroundColor: "#F4F4F4", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } : { backgroundColor: "white" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > <div className="col">
                  <Typography sx={{ width: '100%', flexShrink: 0 }} className="typo-heading">Have many Network?</Typography>
                  <Typography sx={{ color: 'text.secondary' }} className="typo-dis">Download our CSV file and input all your branch details in just minutes</Typography>
                </div>
              </AccordionSummaryBox>
              <AccordionDetailsBox >
                <Typography>
                  <DistributionUpload />
                </Typography>
              </AccordionDetailsBox>
            </AccordionBox>
          </div>

          {/* accordian */}

          {/* orline */}
          <div className="row">
            <p className="orline_dis"><span className="orline-text">or</span></p>
          </div>
          {/* orline */}

          {/* accordian */}
          <div className="row pad">
            <AccordionBox expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
              <AccordionSummaryBox
                style={changeBackground === "panel2" ? { backgroundColor: "#F4F4F4", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } : { backgroundColor: "white" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              > <div className="col">
                  <Typography sx={{ width: '100%', flexShrink: 0 }} className="typo-heading">One At A Time</Typography>
                  <Typography sx={{ color: 'text.secondary' }} className="typo-dis">
                    Have only one or few branches, use this option.
                  </Typography>
                </div>

              </AccordionSummaryBox>
              {/* HaveManyBranches Accordian start*/}

              {/* from Accordian start*/}
              <AccordionDetailsBox >
                <Typography>
                  {/* form */}
                  <div>
                    <form className='container-fluid mt-2'>
                      <div className="form-row">
                        <div class="form-group col-lg-6">
                          <label for="inputEmail4" className='font-dis'>Firm Name*</label>
                          <input type="email" class="form-control field-height-dis" id="inputEmail4" placeholder="Firm Name" />
                        </div>
                        <div className="form-group col-lg-6">
                          <label for="inputPassword4" className='font-dis'>Network Type*</label>
                          <input type="password" className="form-control field-height-dis" id="inputPassword4" placeholder="Network Type" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-lg-6">
                          <label for="inputEmail4" className='font-dis'>Email ID*</label>
                          <input type="email" className="form-control field-height-dis" id="inputEmail4" placeholder="fullname@gmail.com" />
                        </div>

                        <div className="col-lg-6 mb-3">
                          <label for="validationServerUsername" className='font-dis'>Contact Number*</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <input className="form-control input-group-text dis-field-phone" placeholder="+91" />
                            </div>
                            <input type="text" className="form-control field-height-dis" placeholder="99999 99999" required />
                          </div>
                        </div>
                      </div>


                      <div class="form-group">
                        <label for="inputAddress2" className='font-dis'>Branch Address*</label>
                        <input type="text" class="form-control field-height-dis" placeholder="#Flat No, Block, Street, Area" />
                      </div>

                      <div class="form-row">
                        <div class="form-group col-lg-3">
                          <select id="inputState" class="form-control field-height-dis">
                            <option selected>Country</option>
                            <option>india</option>
                          </select>
                        </div>
                        <div class="form-group col-lg-3">
                          <select id="inputState" class="form-control field-height-dis">
                            <option selected>State</option>
                            <option>Haryana</option>
                          </select>
                        </div>
                        <div class="form-group col-lg-3">
                          <select id="inputState" class="form-control field-height-dis">
                            <option selected>City</option>
                            <option>Faridabad</option>
                          </select>
                        </div>
                        <div class="form-group col-lg-3">
                          <input type="text" class="form-control field-height-dis" id="inputZip" placeholder="12345" />
                        </div>
                      </div>

                    </form>
                  </div>
                  {/* form */}
                </Typography>
              </AccordionDetailsBox>
              {/* from Accordian end*/}
            </AccordionBox>
          </div>
          
        </div>
      </div>
    </>
  );
}
