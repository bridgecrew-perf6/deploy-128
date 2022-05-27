import React from 'react';
import styled from "styled-components";

const ListAccForm = styled.form``;
const ExperienceElement = styled.div``;
const AddExpLabel = styled.label``;
const ExpElement = styled.div``;
const JobTitleCont = styled.div``;
const TitleHead = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const EmploymentCont = styled.div``;
const SelectCont = styled.select``;
const SelectOption = styled.option``;
const CompanyCont = styled.div``;
const DatesCont = styled.div``;
const StartDateCont = styled.div``;
const StartDateLabel = styled.label;
const EndDateCont = styled.div``;
const EndDateLabel = styled.label``;
const AddButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  width: 250px;
  height: 50px;
  margin: 30px 0 20px 0;
`;
const BriefDescCont = styled.div``;
const BriefDescLabel = styled.label``;
const CurrWorkCont = styled.div``;
const CurrWorkSpan = styled.span``;

const StudListAccordianForm = () => {
  return (
    <>
      <ListAccForm className='container-fluid mt-2 sm-container-fulid' style={{border:"1px dotted",borderRadius:"10px"}}>
        <ExperienceElement className='col pl-0' style={{display:"flex",justifyContent:"space-between"}}>
          <AddExpLabel for="inputEmail4" className='b-font'>ADD Experience</AddExpLabel>
          <span style={{color:"#000000",fontWeight:"600"}}>X</span>
        </ExperienceElement>
        <ExpElement className="form-row">
          <JobTitleCont class="form-group col-lg-12">
            <TitleHead>Job Title</TitleHead>
            <input title='First Name' type="email" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: UI/UX Designer" />
          </JobTitleCont>
          <EmploymentCont className="form-group col-lg-12">
            <TitleHead>Employment Type</TitleHead>
              {/* <input type="password" className="form-control b-field-height" id="inputPassword4" placeholder="Last Name" /> */}
            <SelectCont class="form-control b-field-height" id="inputEmail4">
              <SelectOption></SelectOption>
              <SelectOption>First</SelectOption>
              <SelectOption>First</SelectOption>
            </SelectCont>
          </EmploymentCont>
            <CompanyCont class="form-group col-lg-12">
            <TitleHead>Company*</TitleHead>
              <input title='First Name' type="email" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: Material Library" />
            </CompanyCont>
        </ExpElement>

          <DatesCont className="form-row">
            <StartDateCont className="form-group col-md-6">
              <StartDateLabel for="inputEmail4" className='b-font'>Start Date*</StartDateLabel>
              <input type="date" className="form-control b-field-height" id="inputEmail4" placeholder="fullname@gmail.com" />
            </StartDateCont>

            <EndDateCont className="col-md-6 mb-3">
              <EndDateLabel for="validationServerUsername" className='b-font'>End Date*</EndDateLabel>
              <div className="input-group">
                {/* <div>
                  <input className="input-group-text b-region-field-phone" placeholder="+91" />
                </div> */}
                <input type="date" className="form-control b-field-height" placeholder="99999 99999" required />

              </div>
            </EndDateCont>
          <CurrWorkCont style={{display:"flex", alignItems:"center"}}>
            <input type="checkbox" style={{margin:"0 10px"}}/>
            <CurrWorkSpan>currently work here</CurrWorkSpan>
          </CurrWorkCont>
          </DatesCont>


          <BriefDescCont class="form-group">
            <BriefDescLabel for="inputAddress2" className='b-font'>Brief Description*</BriefDescLabel>
            <input type="text" class="form-control b-field-height" id="inputAddress2" placeholder="" />
          </BriefDescCont>

          {/* <div class="form-row">
            <div class="form-group col-md-3">
              <select id="inputState" class="form-control b-field-height">
                <option selected>Country</option>
                <option>india</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <select id="inputState" class="form-control b-field-height">
                <option selected>State</option>
                <option>Haryana</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <select id="inputState" class="form-control b-field-height">
                <option selected>City</option>
                <option>Faridabad</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <input type="text" class="form-control b-field-height" id="inputZip" placeholder="12345" />
            </div>
          </div> */}
          <AddButton>Add</AddButton>
      </ListAccForm>
    </>
  )
}

export default StudListAccordianForm;