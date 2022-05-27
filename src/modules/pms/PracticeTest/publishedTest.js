import React from 'react'
import Box from '@mui/material/Box';
import ClippedDrawer from "../../vms/shared/header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
// import Frame from "../../../assets/images/Frame.png"
// import FormPractice from "./formPractice"

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
margin-bottom:82px;

`;
const ParentDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`;
const BoxDiv = styled.div`
height: 260px;
width: 328px;
left: 507px;
top: 422px;
border-radius: 10px;
background: #DEDEDE;
border: 2px dashed #000000;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;
const BoxDiv2 = styled(BoxDiv)`
background: #F5F5F5;

`;
const SpanText = styled.span`
font-family: Inter;
font-size: 20px;
font-weight: 600;
text-align: center;

`;
const SpanText2 = styled.span`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: center;

`;
const SubBox = styled.div`
font-family: Inter;
font-size: 18px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
border: 1px solid #000000;
width: 233px;
height:50px;
display: flex;
    justify-content: center;
    align-items: center;
`;
const BoxHead = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;




const PublishedTest = () => {
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
        <SecondHead>Create Quiz for better learning.</SecondHead>
<ParentDiv>
    
<BoxHead>
<BoxDiv>
<SpanText>Assign to your Students</SpanText>
<SpanText2>Directly allocate the test to your students</SpanText2>
        </BoxDiv>
        <SubBox>Publish to your Students</SubBox>
</BoxHead>
<BoxHead>

        <BoxDiv2>
<SpanText>Public Link</SpanText>
<SpanText2>Anyone with this link can give test</SpanText2>
        </BoxDiv2>
        <SubBox>Publish & Share link</SubBox>

        </BoxHead>

</ParentDiv>
      
        </ContentBox>
</Box>
        </div>
  )
}

export default PublishedTest;