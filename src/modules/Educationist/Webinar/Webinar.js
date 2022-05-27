import React, { useState } from "react";
import styled from "styled-components";
import EduSelectWebinar from "./SelectWorker";
import SelectWebinar from "./SelectWorker";

const mainDiv = styled.div``;
const Heading = styled.div``;
const Label = styled.label`
  padding-top: 20px;
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
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.9em;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TestText = styled.div`
    padding-top: 64px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
`;

const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  margin-top: 13px;
  font-size: 20px;
  width: 946px;
  height: 50px;
  color: white;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background: #f24f17;
  line-height: 24px;
  border:none;
  
`;

const EduWebinar = () => {
  const [nextPage, setNextPage] = useState(true);

  return (
    <mainDiv>
      {nextPage ? (
        <div>
          <Heading>
            <Label>Webinar</Label>
            <Line></Line>
            <Div>
              <Text>Create Webinar for your students.</Text>
            </Div>
          </Heading>

          <BottomDiv>
            <img src="./images/quizimage.svg"></img>
            <TestText>No Webinar Found</TestText>
            <Button
              onClick={() => {
                setNextPage(false);
              }}
            >
              Click Here To create Webinar
            </Button>
          </BottomDiv>
        </div>
      ) : (
        <EduSelectWebinar></EduSelectWebinar>
      )}
    </mainDiv>
  );
};

export default EduWebinar;
