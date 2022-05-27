// import * as React from 'react';
import React from "react";
// import 'react-tabs/style/react-tabs.css';
// import 'font-awesome/css/font-awesome.min.css';
import ProjectMain from "./ProjectMain";
import styled from "styled-components";
import { useState } from "react";
import "./project.css";
import "./projectcard.css";
import "./projectmodel.css";
import ProjectPortfolio from "./ProjectPortfolio";
import ProjectThesis from "./ProjectThesis";

const PostButton = styled.button`
  border: none;
  background: none;
  min-width: 140px;
`;
const DraftButton = styled.button`
  border: none;
  background: none;
  min-width: 140px;
`;
const ClosedButton = styled.button`
  border: none;
  background: none;
  min-width: 206px;
`;
const AppliedTab = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Tab = styled.div`
  height: 39px;
  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;

const Container = styled.div`
  min-height: 856px;
  background: #ffffff;
  box-shadow: none !important;
  border-radius: 10px !important;
`;

const Containersms = styled.div`
  padding: 0 0 20px 0;
`;

const ContainerPadding = styled.div`
  padding: 31px 0px 20px 0px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px !important;
  line-height: 24px;
  color: #1f1f1f;
  padding-bottom: 5px !important;
`;

const Headline = styled.div`
  border-bottom: 4px solid var(--mlorange) !important;
  width: 10%;
`;

const SubHeading = styled.div`
  padding: 30px 0 31px 0;
`;

const Input = styled.input`
  width: 250px !important;
  padding: 9px 4px 9px 40px;
  background: transparent url("/icons/search.svg") no-repeat 13px center;
  background-color: #f2f2f2;
  margin-right: 50px;
  height: 40px !important;
  border: none !important;
  border: none;
`;

const ContainerRow = styled.div``;

export default function Project() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };

  return (
    <Container className="container-fluid ">
      <Containersms>
        {/* heading */}
        <ContainerPadding className="row">
          <div className="col-12">
            <Title className="row dis-title">Project</Title>
            {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
          </div>
        </ContainerPadding>
        {/* heading */}

        {/* headline */}
        <ContainerRow className="row">
          <Headline className="pms_headline"></Headline>
        </ContainerRow>
        {/* headline */}

        <SubHeading className="row pms_sub_heading">
          Display your projects and portfolios
        </SubHeading>

        <ContainerRow className="row">
          <form className="">
            <Input type="search" placeholder="Search" />
          </form>
        </ContainerRow>

        <ContainerRow className="row">
          <div className="col-8 pl-0">
            <AppliedTab>
              <Tab>
                <PostButton
                  className={activeTab === "tab1" ? "active-post" : ""}
                  onClick={handleTab1}
                >
                  Projects
                </PostButton>
                <DraftButton
                  className={activeTab === "tab2" ? "active-post" : ""}
                  onClick={handleTab2}
                >
                  Portfolios
                </DraftButton>
                <ClosedButton
                  className={activeTab === "tab3" ? "active-post" : ""}
                  onClick={handleTab3}
                >
                  Thesis & Dissertations
                </ClosedButton>
              </Tab>
            </AppliedTab>
          </div>
          <div className="col-4 pad_pms">
            <b className="float-right">Total 50</b>
          </div>
        </ContainerRow>

        <ContainerRow className="row">
          {activeTab === "tab1" ? <ProjectMain /> : ""}
          {activeTab === "tab2" ? <ProjectPortfolio /> : ""}
          {activeTab === "tab3" ? <ProjectThesis /> : ""}
        </ContainerRow>
       
      </Containersms>
    </Container>
  );
}
