import React from 'react'

import styled from "styled-components";

const MainComp = styled.div`
position: absolute;
width: 400px;
height: 639px;
left: 280px;
background: #FFFFFF;
border-radius: 10px;`;

const FirstDiv = styled.div`
font-family: Inter;
font-size: 35px;
font-weight: 700;
line-height: 42px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 40px;
margin-top: 50px;
`;
const SecondDiv = styled.div`

width: 250px;
height: 250px;
background: #F5F5F5;
border-radius: 10px;
margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
`;
const ThirdDiv = styled.div`
font-family: Inter;
font-size: 20px;
font-weight: 500;
text-align: center;
margin-bottom:62px;
padding: 0 40px;
`;
const Button = styled.div`
width: 250px;
height: 50px;
background: #FF7A59;
border: 1px solid #FF7A59;
border-radius: 5px;
color:#ffffff;
margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const cardthirdComp = () => {
  return (
    <MainComp>
    <FirstDiv>
Seller
    </FirstDiv>
    <SecondDiv></SecondDiv>
    <ThirdDiv>Manufacturer, Supplier, Retailer, Vendor</ThirdDiv>
    <Button>MORE DETAILS</Button>
    </MainComp>
  )
}

export default cardthirdComp