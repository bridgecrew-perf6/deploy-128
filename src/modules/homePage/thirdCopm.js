import React from 'react'
import styled from "styled-components";
import CardComp from "./cardthirdComp";

const MainComp = styled.div`
background: #F5F5F5;
padding: 100px 0;
height: 1028px;

`;

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:50px;
`;
const Span = styled.div`
font-family: Inter;
font-size: 50px;
font-weight: 700;
line-height: 61px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 30px;

`;
const Span1 = styled.div`
font-family: Inter;
font-size: 20px;
font-weight: 300;
line-height: 25px;
letter-spacing: 0em;
text-align: center;

`;
const SecondDiv = styled.div`

`;


const thirdCopm = () => {
  return (
<MainComp>
    <FirstDiv>
        <Span>Specially Designed For</Span>
        <Span1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis,<br/> vulputate nec condimentum et, scelerisque quis diam. </Span1>
    </FirstDiv>
    {/* <SecondDiv> */}
        <CardComp />
    {/* </SecondDiv> */}
</MainComp>  )
}

export default thirdCopm