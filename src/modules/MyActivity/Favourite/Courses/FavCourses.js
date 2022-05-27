import React, { useState } from "react";
import styled from "styled-components";
import FavCoursesSaved from "./FavCoursesSaved";
// import Posted from "./Posted";
// import Drafts from "./Drafts";
// import NotAccepted from "./NotAccepted";

const FavCourseContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background: #FFFFFF;
`;

const UnderlineML = styled.div`
  width: 100px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #F24F17;
    height: 0;
`;
const FavCourseTitle = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #1f1f1f;
`;
const FavourseTitlePara = styled.p`

  height: 19px;
  top: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 30px 0px 31px 0px;
  color: #1f1f1f;
`;

const FavCourseSearch = styled.input`
  border: none;
  width: 250px;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 2px;
  margin-bottom: 30px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: black !important;
  }
  :-ms-input-placeholder {
    color: black !important;
  }
`;
const ManageTab = styled.div``;
const PostedButton = styled.button`
  width: 144px;
  border: none;
`;
const DraftsButton = styled.button`
  width: 144px;
  border: none;
`;

const NotAcceptedButton = styled.button`
  width: 144px;
  border: none;
`;

const Tab = styled.div`
  width: 441px;
  height: 39px;
  left: 455px;
  top: 283px;

  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;

export default function ManageBlogComponents() {


  return (
    <>
      <FavCourseContainer className="container-fluid">
        <div>
            <FavCourseTitle>Courses</FavCourseTitle>
            <UnderlineML></UnderlineML>
            <FavourseTitlePara>
              All your saved courses will be visible here
            </FavourseTitlePara>
            <div className="d-flex justify-content-between">
              <FavCourseSearch type="search" placeholder="Search" />
              <p>Total 50</p>
            </div>
        </div>
          <FavCoursesSaved />
      </FavCourseContainer>
    </>
  );
}
