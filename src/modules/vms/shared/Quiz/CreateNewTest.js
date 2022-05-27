import React, { useState } from "react";
import styled from "styled-components";
import Questionaire from "./Questionaire";

const mainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;
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
  content: ">";

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
const Heading = styled.div``;
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
`;
const Div=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 1.9em;
`;

const Contanier = styled.div`
  margin-bottom: 30px;
`;
const Name = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-bottom: 10px;
`;
const InputField = styled.input`
  box-sizing: border-box;
  width: 820px;
  height: 50px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
  line-height: 23px;
`;
const SelectField = styled.select`
  box-sizing: border-box;
  width: 820px;
  height: 50px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  padding-left: 20px;
`;
const InputFields = styled.div`
margin-top: 44px;
`;
const OptionField = styled.option`
  color: #1f1f1f;
  opacity: 0.3;
`;

const ButtonDiv =styled.div`
display: flex;
flex-direction: row;
justify-content: end;
width: 100%;
margin-top:90px;
`
const Button =styled.button`
width: 233px;
height: 50px;
color: white;
background: #000000;
border-radius: 5px;
`

const CreateNewTest = () => {
  const [nextpage,setNextPage]=useState(false);
  return (
    <>
    {nextpage ?  (<Questionaire/>):(
      <mainDiv>
      <MainText>Create a New Test</MainText>
      <GreaterThan>&gt;</GreaterThan>
      <OtherText>Add Questionnaire</OtherText>
      <GreaterThan>&gt;</GreaterThan>
      <OtherText>Publish</OtherText>
  

    
    <Heading>
      <Label>Quiz</Label>
      <Line></Line>
      <Div>
        <Text>Create Quiz for your students.</Text>
      </Div>
    </Heading>
    <InputFields>
      <Contanier>
        <Name>Quiz name*</Name>
        <InputField
          className="Input-Text"
        ></InputField>
      </Contanier>

      <Contanier>
        <Name>Duration in minutes*</Name>
        <InputField
          className="Input-Text"
          placeholder="30"
        ></InputField>
      </Contanier>

      <Contanier>
        <Name>Difficulty level*</Name>
        <SelectField>
          <OptionField>Medium</OptionField>
        </SelectField>
      </Contanier>

      
      <Contanier>
        <Name>Marks for correct answer*</Name>
        <InputField
          className="Input-Text"
          placeholder="1"
        ></InputField>
      </Contanier>

      <Contanier>
        <Name>Marks for Wrong answer*</Name>
        <InputField
          className="Input-Text"
          placeholder="-1"
        ></InputField>
      </Contanier>

      <ButtonDiv><Button onClick={()=>setNextPage(true)}>Next</Button></ButtonDiv>

      </InputFields>
      </mainDiv>

    ) }
      


    </>
  );
};

export default CreateNewTest;
