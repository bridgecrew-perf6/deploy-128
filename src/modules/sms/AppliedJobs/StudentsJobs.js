import React, { useState } from 'react'
import styled from "styled-components";
import Table from "./StudentTable"
import AppliedJobs from "./SavedStudentJob"

const StudentJobTitle = styled.div`
    height: 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;

    color: #1F1F1F;
`
const StudentJobTitlePara = styled.p`
    // position: absolute;
    height: 19px;
    top: 200px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
`
const StudentAppliedTab = styled.div`
`
const StudentTabButton = styled.button`

`
const SaveButton = styled.button`
`
const Tab = styled.div`
width: 294px;
height: 39px;
left: 455px;
top: 283px;
overflow:hidden;
background: #F5F5F5;
border-radius: 20px;
margin: 0 0 37px 0;
`
const StudentJobs = () => {
    const [openStudentJob, setOpenStudentJob] = useState("tab1");
    const [openStudentJobSave, setOpenStudentJobSave] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");

  const openHandle = () => {
    setOpenStudentJob(!openStudentJob)

  }
  const openSaveHandle = () => {
    setOpenStudentJobSave(!openStudentJobSave)
    setOpenStudentJob(false)
  }
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
      <>
       <div>
         <StudentJobTitle>My Jobs
         </StudentJobTitle>
         <div className='Underline-Ml'></div>
         <StudentJobTitlePara>View all your applied and saved jobs here.
         </StudentJobTitlePara>
         <StudentAppliedTab>
         <Tab>
         <StudentTabButton className={activeTab === "tab1" ? "student-job-active" : "student-job-unactive"} onClick={handleTab1}>Applied</StudentTabButton>
         <SaveButton className={activeTab === "tab2" ? "student-job-active" : "student-job-unactive"}  onClick={handleTab2}>Saved</SaveButton>
         </Tab>
         </StudentAppliedTab>
        {activeTab === "tab1" ?  <Table/> : <AppliedJobs/>}
       </div>
    </>
  )
}

export default StudentJobs;