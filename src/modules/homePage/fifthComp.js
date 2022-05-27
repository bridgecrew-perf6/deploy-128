import React from 'react'
import styled from "styled-components";

const MAinDiv = styled.div`
margin-top:150px;
`;
const FirstDiv = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 50px;
text-align: center;
margin-bottom:40px;

`;
const SecondDiv = styled.div`
display: flex;
width: 100%;
height: 350px;
background: #F5F5F5;
border-radius: 10px;
padding: 30px;
justify-content: space-around;
margin: 0 10px;


`;
const SubSecondDiv = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;
text-align: center;
margin: 0 20px;

color: #000000;
`;
const SubSecondSpan = styled.div`
display: flex;
flex-direction: column;
`;
const OptionSpan = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;`;

const Parent = styled.div`
display: flex;
margin: 0 50px;
`;

const fifthComp = () => {
  return (
    <>
        <MAinDiv>
            <FirstDiv>Features you will find nowhere else</FirstDiv>
            <Parent>
            <SecondDiv>
                <SubSecondDiv>
                Products
                </SubSecondDiv>
                <SubSecondSpan>
                    
                <OptionSpan>Get Construction Materials</OptionSpan>
                <OptionSpan>Skill Development</OptionSpan>
                <OptionSpan>Skill Development</OptionSpan>
                </SubSecondSpan>
                
            </SecondDiv>
            <SecondDiv>
                <SubSecondDiv>
                Services
                </SubSecondDiv>
                <SubSecondSpan>
                    
                <OptionSpan>Product Installation and Reparing</OptionSpan>
                <OptionSpan>Architecture</OptionSpan>
                <OptionSpan>Skill Development</OptionSpan>
                </SubSecondSpan>
                
            </SecondDiv>
            </Parent>
        </MAinDiv>
    </>
  )
}

export default fifthComp