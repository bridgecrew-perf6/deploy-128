import React from 'react';
import styled from "styled-components";
import Frame from "../../../assets/images/Frame.png"
import { useHistory } from "react-router-dom";



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
const CenterImg = styled.div`
margin-botom:64px;
align-items: center;
    display: flex;
    justify-content: center;
`;
const HeadingThird = styled.div`
font-family: Inter;
font-size: 35px;
font-weight: 600;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 13px;
`;
const StartButton = styled.div`
    color: #ffffff;
    background: #F24F17;
    position: absolute;
    width: 946px;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
`;


const PracticeComp = () => {

    let history = useHistory();

    const handleTest = () => {
        history.push("/practice-form");
      };

  return (
    <div>
        <Heading>
        Practice Test
        </Heading>
        <BorderHeading>
        </BorderHeading>
        <SecondHead>Create Test for better learning.</SecondHead>
        <CenterImg>
            <img src={Frame}/>
        </CenterImg>
        <HeadingThird>
        No Test Found
        </HeadingThird>
        <StartButton>
        <span onClick={handleTest}>Click Here To Create Test</span>
                </StartButton>
    </div>
  )
}

export default PracticeComp