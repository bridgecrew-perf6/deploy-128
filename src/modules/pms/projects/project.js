import React from "react";
import ProjectMain from "./ProjectMain"
import PortfolioMain from "./PortfolioMain";
import ThesisMain from "./ThesisMain";
import VideoMain from "./VideoMain"
import styled from "styled-components";
import { useState } from "react";
import "./project.css";
import "./card.css"
import "./projectmodel.css"
import "./Cards/VideoImageCard.css"





const ProjectButton = styled.button`
  border: none;
  background:none;
  min-width: 140px;
`;
const PortfolioButton = styled.button`
  border: none;
  background:none;
  min-width: 140px;
`;
const ThesisButton = styled.button`
  border: none;
  background:none;
  min-width: 206px;
`;

const ImgButton = styled.button`
  border: none;
  background:none;
  min-width: 120px;
`;


const VidButton = styled.button`
   border: none;
  background:none;
  min-width: 120px;
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




export default function Project(props) {

  const { cardCount } = props

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

  const handleTab4 = () => {
    // update the state to tab2
    setActiveTab("tab4");
  };

  const handleTab5 = () => {
    // update the state to tab2
    setActiveTab("tab5");
  };



  return (
    <div className="container-fluid dis-container">
      <div className="container-main-pms">
        {/* heading */}
        <div className="row pad_pms">
          <div className="col-12">
            <div className="row dis-title">Project</div>
            <div className="row"><div className="projectprofessional_headline"></div></div>
            {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
          </div>
        </div>
        {/* heading */}

        {/* headline */}

        {/* headline */}

        <div className="row pms_sub_heading">Display your projects and portfolios</div>

        <div className="row">
          <form>
            <input className="nosubmit_pms" type="search" placeholder="Search" />
          </form>
        </div>


        <div className='row'>
          <div className="col-10 pl-0">
            <AppliedTab>
              <Tab>
                <ProjectButton
                  className={activeTab === "tab1" ? "active-post" : ""}
                  onClick={handleTab1}
                >
                  Projects
                </ProjectButton>
                <PortfolioButton
                  className={activeTab === "tab2" ? "active-post" : ""}
                  onClick={handleTab2}
                >
                  Portfolios
                </PortfolioButton>
                <ThesisButton
                  className={activeTab === "tab3" ? "active-post" : ""}
                  onClick={handleTab3}
                >
                  Thesis & Dissertations
                </ThesisButton>
                <ImgButton
                  className={activeTab === "tab4" ? "active-post" : ""}
                  onClick={handleTab4}
                >
                  Images
                </ImgButton>
                <VidButton
                  className={activeTab === "tab5" ? "active-post" : ""}
                  onClick={handleTab5}
                >
                  Videos
                </VidButton>
        
              </Tab>
            </AppliedTab>
          </div>
          <div className="col-2 pad_pms">
            <b className="float-right">Total {cardCount}</b>
          </div>
        </div>

        <div className="row">
          {activeTab === "tab1" ? <ProjectMain /> : ""}
          {activeTab === "tab2" ? <PortfolioMain /> : ""}
          {activeTab === "tab3" ? <ThesisMain /> : ""}
          {activeTab === "tab4" ? <VideoMain /> : ""}
          {activeTab === "tab5" ? <VidButton /> : ""}
        </div>
      </div>

    </div>
  )
}
