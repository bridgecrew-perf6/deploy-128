import React from 'react'
import styled from 'styled-components';

const MainDiv=styled.div`
display: flex;
flex-direction: row;
background: #F5F5F5;
border: 1px solid #000000;
border-radius: 10px;
width: 371px;
height: 50px;
padding: 10px;
align-items: center;
`;
const SnoTexT=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
margin-left: 25px;
font-size: 20px;
line-height: 24px;
color: #000000;
`
const OptionText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
margin-left: 13px;
font-size: 16px;
line-height: 19px;
color: #000000;
`


const QuestionCard = (prop) => {

    const {sno,option}=prop;
  return (
    <>
    <MainDiv>
        <SnoTexT>{sno}</SnoTexT>
        <OptionText>{option}</OptionText>
    </MainDiv>
    
    </>
  )
}

export default QuestionCard