import React from "react";
import styled from "styled-components";
import Card from "./card"

const mainDiv = styled.div``;
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
const Total=styled.div``
const CardDiv=styled.div`
 display: grid;
  grid-template-columns: auto auto;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 10px;`;

export default function course() {

  const data=[
    {
     title:"Advance concrete technology sfhuhs fhfd asd ufjsna...",
     subtitle:"Instructor Name" ,
     percant:"40% Completed",
     time:"1h 30m",
    },
    {
      title:"Advance concrete technology sfhuhs fhfd asd ufjsna...",
      subtitle:"Instructor Name",
      percant:"40% Completed",
      time:"1h 30m",
     },
     {
      title:"Advance concrete technology sfhuhs fhfd asd ufjsna...",
      subtitle:"Instructor Name" ,
      percant:"40% Completed",
      time:"1h 30m",
     },
     {
      title:"Advance concrete technology sfhuhs fhfd asd ufjsna...",
      subtitle:"Instructor Name" ,
      percant:"40% Completed",
      time:"1h 30m",
     },
] 
  return (
    <mainDiv>
      <Heading>
        <Label>Ongoing Course</Label>
        <Line></Line>
        <Div>
          <Text>All your ongoing courses will be shown here</Text>
          <Total><h7>Total</h7>:50</Total>
        </Div>
      </Heading>


      <CardDiv>
     
        {data.map((ele)=>(
           <Card 
           title={ele.title}
           subtitle={ele.subtitle}
           time={ele.time}
           percant={ele.percant}
           
           />
        ))}

      </CardDiv>
    </mainDiv>
  );
}
