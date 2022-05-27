import React,{useState} from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  margin-top: 42px;
  width: 90%;
`;
const MainText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f24f17;
`;
const GreaterThan = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
  font-size: 40px;
  line-height: 48px;
  content: "";
  color: #000000;
`;
const OtherText = styled.label`
  font-family: "Inter";
  font-style: normal;
  margin-left: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;
const Heading = styled.div`
  margin-top: 50px;
`;
const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #1f1f1f;
  margin-bottom: 0;
`;
const Line = styled.div`
  outline: 2px solid #ff7a59;
  width: 100px;
  margin-top: 1.2em;
`;
const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  margin-bottom: 0;
  margin-top: 1.9em;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardDiv = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;

`
const FirstCardDiv = styled.div`
background: #DEDEDE;
border: 2px dotted #000000;
display: flex;
flex-direction: column;
width: 328px;
height: 260px;
text-align: center;
padding: 30px 30px;
justify-content: center;
border-radius: 10px;`
const SecondCardDiv = styled.div`
background: #F5F5F5;;
border: 2px dotted #000000;
display: flex;
flex-direction: column;
width: 328px;
height: 260px;
text-align: center;
padding: 30px 30px;
justify-content: center;
border-radius: 10px;`
const HeadingLabel = styled.label`

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #000000;
text-align: center;
`
const SubHeadingLabel = styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #000000;
`;
const MainFirstCardDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const MainSecondCardDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 121px;
`;
const ButtonText=styled.button`
width: 233px;
height: 50px;
padding: 2px;
border: 1px solid #000000;
border-radius: 5px;
`
const PublishDiv=styled.div`
display: flex;
flex-direction: row;
float: right;
margin-top: 126px;
`
const PublishButton=styled.button`
width: 233px;
height: 50px;
background: #000000;
color:white;
border-radius: 5px;
`

const PublishPage = () => {
  return (
    <>
      <MainDiv>
        <OtherText>Create a New Test</OtherText>
        <GreaterThan>&gt;</GreaterThan>
        <OtherText>Add Questionnaire</OtherText>
        <GreaterThan>&gt;</GreaterThan>
        <MainText>Publish</MainText>

        <Heading>
          <Label>Practice Test</Label>
          <Line></Line>
          <Div>
            <Text>Create Quiz for better learning</Text>
          </Div>
        </Heading>

        <CardDiv>
            <MainFirstCardDiv>
            <FirstCardDiv>
                <HeadingLabel>
                Assign to your Students

                </HeadingLabel>
                <SubHeadingLabel>
                Directly allocate the test to your students
                </SubHeadingLabel>

            </FirstCardDiv>
            <ButtonText>Publish to your Students</ButtonText>
            </MainFirstCardDiv>

            <MainSecondCardDiv>
            <SecondCardDiv>
            <HeadingLabel> Public Link </HeadingLabel>
                <SubHeadingLabel> Anyone with this link can give test</SubHeadingLabel>
            </SecondCardDiv>
            <ButtonText>Publish & Share link</ButtonText>
            </MainSecondCardDiv>
        </CardDiv>
        <PublishDiv><PublishButton>Publish</PublishButton></PublishDiv>
      </MainDiv>
    </>
  );
};

export default PublishPage;
