import React from 'react'
import Box from '@mui/material/Box';
import ClippedDrawer from "../../vms/shared/header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
// import Frame from "../../../assets/images/Frame.png"
import FormPractice from "./formPractice"

const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`

const Heading = styled.div`
font-size:25px;
margin-top:83px;
color: #000000;
font-weight:600; 
`;
const BorderHeading = styled.div`
border: 3px solid #F24F17;
width:100px;
margin-bottom: 30px;

`;
const SecondHead = styled.div`
font-weight:400;

`;
const PracticeForm = () => {
  return (
    <div>
    <Box sx={{ display: 'flex', backgroundColor:'white'  }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3, pt:3, backgroundColor:'white' }}>
        <Toolbar />
        <Heading>
        Practice Test
        </Heading>
        <BorderHeading>
        </BorderHeading>
        <SecondHead>Create Test for better learning.</SecondHead>
        <br/>
        <br/>
        <FormPractice />
        </ContentBox>
</Box>
        </div>
  )
}

export default PracticeForm;

