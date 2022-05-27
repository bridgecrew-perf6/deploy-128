import React from 'react';
import styled from 'styled-components';
import FavouriteProjectMain from "./FavouriteProjectMain"; 

const FProjectCont = styled.div``;

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

const Project = () => {
  return (
    <>
      <FProjectCont className='container-fluid dis-container'>
        <div className='container-main-pms'>
          {/* heading */}
          <div className="row pad_pms">
            <div className="col-12">
              <div className="row dis-title">Project</div>
              <div className="row"><div className="projectprofessional_headline"></div></div>
              {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
            </div>
          </div>

          <div className="row pms_sub_heading">All your saved projects will be visible here</div>

          <div className="row">
          <form>
            <input className="nosubmit_pms" type="search" placeholder="Search" />
          </form>
        </div>
        <div className="row">
          <div className="col-10">
            <FavouriteProjectMain />
          </div>
        </div>
        </div>
      </FProjectCont>
    </>
  )
}

export default Project;