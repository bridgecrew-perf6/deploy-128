import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header";
const Jobs = styled.div`
  color: #ff7a59;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 20px;
`;
const FindJob = styled.div`
  font-family: Inter;
  font-size: 55px;
  font-weight: 700;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  width: 820px;
  margin-top: 20px;
`;
const SearchJob = styled.div`
  color: #1f1f1f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  width: 850px;
  margin-top: 20px;
`;
const JobInput = styled.input`
  background: #ffffff;
  border: 2px solid rgba(105, 105, 105, 0.5);
  border-radius: 10px;
`;
const SearchButton = styled.button`
  background: #ff7a59;
  border: 1px solid #ff7a59;
  border-radius: 10px;
  width: 150px;
  color: #ffffff;
  margin-left: 30px;
`;
export default function MyJobs() {
  return (
    <>
      <Header />
      <div>
        <Jobs>JOBS</Jobs>
        <FindJob>Find the job you have been waiting for</FindJob>
        <SearchJob>
          Search for the job that is right for you at your desired location.
          Save jobs liked by you and get application status for all your
          applications.{" "}
        </SearchJob>
        <div style={{ marginTop: "20px" }}>
          <JobInput placeholder="Job Title"></JobInput>
          <JobInput
            placeholder="Job Location"
            style={{ marginLeft: "30px" }}
          ></JobInput>
          <SearchButton>Search</SearchButton>
        </div>
      </div>
    </>
  );
}
