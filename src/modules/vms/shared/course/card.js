import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  box-sizing: border-box;
  width: 650px;
  height: 191px;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
`;
const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImgDiv=styled.div`
width: 200px;
height: 190px;
background: #C4C4C4;
border-radius: 10px 0px 0px 10px;
`
const DetailDiv=styled.div`
display: flex;
flex-direction: column;
width:100%;
padding:20px;

`
const HeadSection=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: top;
`
const TimePercant=styled.div`
display: flex;
flex-direction: row;
align-items: top;
`
const Percant =styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 0.8rem;
line-height: 17px;
color: #28AD95;
`;
const Time =styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
line-height: 17px;
color: #696969;
`
const Remove=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 0.8rem;
line-height: 17px;
text-align: right;
color: #696969;
`;
const Line=styled.div`
  border-left: 2px solid #000000;
  height: 15px;
  margin-right: 0.9rem;
 margin-left: 0.9rem;
`
const MiddleSection=styled.div`

`;
const Title=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1.1rem;
line-height: 22px;
color: #1F1F1F;
`;
const SubTitle=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 19px;
color: #696969;
`;

const BottomSection=styled.div`
width: 410px;
height: 15px;
margin-top:1.9em;
`;
const ProgressBar=styled.div`
width: 100%;
height: 15px;
background: #F5F5F5;
border-radius: 10px;
position: relative;
`
const SubProgress=styled.div`
position: absolute;
width: 168px;
height: 15px;
background: #72D1C6;
border-radius: 10px;
`;

const Card = (props) => {
  let { title, subtitle, percant, time } = props;
  return (
    <>
      <MainDiv>
        <SubDiv>
          <ImgDiv></ImgDiv>
          <DetailDiv>
              <HeadSection>
                  <TimePercant>
                  <Percant>{percant}</Percant>
                  <Line></Line>
                  <Time>{time}</Time>
                  </TimePercant>
                  <Remove>Remove</Remove>
              </HeadSection>
              <MiddleSection>
                  <Title>{title}</Title>
                  <SubTitle>{subtitle}</SubTitle>
              </MiddleSection>

              <BottomSection>
                  <ProgressBar>
                      <SubProgress></SubProgress>
                  </ProgressBar>
              </BottomSection>

          </DetailDiv>

        </SubDiv>
      </MainDiv>
    </>
  );
};

export default Card;
