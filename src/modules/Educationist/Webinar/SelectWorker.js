import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding-top: 173px;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextWebinar = styled.label`
  padidng-top: 173px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 39px;
`;
const FirstDiv = styled.div`
  background: #dedede;
  border: 3px dotted black;
  border-radius: 10px;
  width: 328px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 337px;
`;
const SecondDiv = styled.div`
  background: #f5f5f5;
  border: 3px dotted black;
  border-radius: 10px;
  width: 328px;
  align-items: center;
  margin-left: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 337px;
`;
const TitleText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;
const SubTitleText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;
const ButtonDiv = styled.div`
  padding-top: 149px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BackButton = styled.button`
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;
  padding: 13px 45px 13px 47px;
`;

const NextButton = styled.button`
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;
  padding: 13px 45px 13px 47px;
`;

function EduSelectWebinar() {
  return (
    <>
      <MainDiv>
        <SubDiv>
          <TextWebinar>
            Want to do Live Webinar OR Online Video Webinar?
          </TextWebinar>

          <CardDiv>
            <FirstDiv>
              <TitleText>Live</TitleText>
              <SubTitleText>
                Qui numquam tenetur aut illo quidem est neque repudiandae et
                impedit quia ut dolor nihil eos illo delectus aut{" "}
              </SubTitleText>
            </FirstDiv>
            <SecondDiv>
              <TitleText>Online Video</TitleText>
              <SubTitleText>
                Qui numquam tenetur aut illo quidem est neque repudiandae et
                impedit quia ut dolor nihil eos illo delectus aut{" "}
              </SubTitleText>
            </SecondDiv>
          </CardDiv>
        </SubDiv>
        <ButtonDiv>
          <BackButton>Back</BackButton>
          <NextButton>Next</NextButton>
        </ButtonDiv>
      </MainDiv>
    </>
  );
}

export default EduSelectWebinar;
