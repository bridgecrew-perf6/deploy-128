import Card from "material-ui/Card/Card";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  float: left;
  width: 33.33%;
  padding-bottom: 30px;

  @media only screen and (max-width: 1500px) {
    float: left;
    width: 50%;
  }
`;

const ContentSms = styled.div`
  background-color: white;
  /* padding: 15px; */
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  width: 400px;
  height: 470px;
  margin-right: 83px;
`;

const StudentCardImage = styled.img`
  //   css not found
`;

const CardCross = styled(Card)`
  height: 35px;
  width: 35px;
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 20px;
  background-color: #ffffff;
  border-radius: 50%;
`;

const CardCheckBox = styled.div`
  //css not found
`;

const CardCheckBoxInput = styled.input`
  height: 20px;
  width: 20px;
  position: absolute;
  z-index: 2;
  left: 15px;
  top: 20px;
  background-color: #ffffff;
`;

const CardContent = styled.div`
  padding: 20px 0 20px 15px;
`;
const CardDate = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #696969;
`;

const CardTitle = styled.div`
  font-size: 50px;
  word-break: break-all;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1f1f1f;
  padding-top: 2px;
  padding-bottom: 4px;
`;

const CardAuthor = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #696969;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const CardRemark = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1f1f1f;
`;

const CardItem = styled.div`
  padding-right: 10px;
`;

const CardImage = styled.img`
  height: 13.94px;
  width: 12.15px;
  margin-right: 5px;
  margin-bottom: 2px;
`;

const Cards = (props) => {
  const { title, authorname, image, date, like, view, save, comment, project } =
    props;

  return (
    <>
      <MainContainer>
        <ContentSms>
          <StudentCardImage
            src={image}
            className="project_card_image" //css not found
            alt="Lights"
          />
          <CardCross>{project}</CardCross>

          <CardCheckBox className="card_checkbox">
            {" "}
            {/*css not found card_checkbox*/}
            <CardCheckBoxInput type="checkbox" />
          </CardCheckBox>

          <CardContent>
            <CardDate>{date}</CardDate>
            <CardTitle>{title}</CardTitle>
            <CardAuthor>{authorname}</CardAuthor>
            <CardRemark>
              <CardItem >
                <span>
                  {" "}
                  <CardImage
                   
                    src="icons/heart.svg"
                    alt="mail"
                  />
                  {like}
                </span>
              </CardItem>
              <CardItem >
                <span>
                  {" "}
                  <CardImage  src="icons/view.svg" alt="view" />
                  {view}
                </span>
              </CardItem>
              <CardItem >
                <span>
                  {" "}
                  <CardImage  src="icons/save.svg" alt="save" />
                  {save}
                </span>
              </CardItem>
              <CardItem >
                <span>
                  {" "}
                  <CardImage
                    
                    src="icons/comment.svg"
                    alt="comment"
                  />
                  {comment}
                </span>
              </CardItem>
            </CardRemark>
          </CardContent>
        </ContentSms>
      </MainContainer>
    </>
  );
};

export default Cards;
