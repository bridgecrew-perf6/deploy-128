import { display } from "@mui/system";
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
const SecondDiv = styled.div`
  width: 488px;
  height: 488px;
  left: 1232px;
  background: #f5f5f5;
  border-radius: 10px;
`;

const FindJob = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  color: #1f1f1f;
  width: 820px;
  margin-top: 20px;
  text-align: center;
`;
const SearchJob = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  width: 850px;
  margin-top: 20px;
  text-align: center;
`;
const JobInput = styled.input`
  background: #ffffff;
  border: 2px solid rgba(105, 105, 105, 0.5);
  border-radius: 10px;
`;
const SearchButton = styled.button`
  width: 250px;
  height: 50px;
  background: #ff7a59;
  border: 1px solid #ff7a59;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
const SearchJobButton = styled.button`
  width: 250px;
  height: 50px;
  border: 2px solid #ff7a59;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ff7a59;
`;

const SecondRow = styled.div`
  width: 1921px;
  height: 502px;
  background: #f5f5f5;
`;
const Active = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-top: 10px;
`;
const RecommendBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 184px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
`;
const ActiveBox = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 251px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
  padding: 50px;
`;
const CompanyImage = styled.img`
  width: 120px;
  height: 80px;
  border-radius: 50%;
  margin-left: 10px;
`;
const CompanyName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1f1f1f;
  width: 139px;
`;
const CompanyField = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  width: 113px;
  margin-left: 10px;
`;
const CompanyLocation = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 66px;
  color: rgba(31, 31, 31, 0.5);
  margin-left: 25px;
`;
const ViewBox = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  border: 2px solid #696969;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

const TrendCompany = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  width: 136px;
  color: #696969;
  margin-left: 47px;
  margin-top: 5px;
`;
const TrendLocation = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 66px;
  color: #696969;
  margin-left: 47px;
  margin-top: 5px;
`;
const TrendApplicant = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  width: 91px;
  color: #696969;
  margin-left: 47px;
  margin-top: 15px;
`;
const TrendPosted = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  width: 111px;
  color: #1f1f1f;
  margin-left: 47px;
  margin-top: 5px;
`;
const PostText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
 width:229px
  color: #1f1f1f;
  margin-left: 10px
`;
const PostImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const MoreImg = styled.img`
  width: 20px;
  height: 15px;
  margin-top: 10px;
  margin-left: 40px;
`;
const FourthRow = styled.div`
  width: 1921px;
  height: 652px;
  background: #696969;
  padding: 100px;
`;
const Simple = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  /* identical to box height */
  width: 585px;
  height: 67px;
  color: #ffffff;
  margin-left: 360px;
`;
const Seaker = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  width: 100px;
  height: 19px;
  color: #ff7a59;
`;
const Recruiter = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  width: 90px;
  height: 19px;
  color: #ffffff;
  opacity: 0.5;
  margin-left: 15px;
`;
const FourthText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  text-align: left;
  margin-top: 10px;
`;
const Track = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  width: 450px;
  height: 44px;
  color: #ffffff;
  text-align: left;
  margin-top: 10px;
`;
export default function StudentJobs() {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "20px", display: "flex" }}>
        <div>
          {" "}
          <Jobs>JOBS</Jobs>
          <FindJob>One Stop Solution to your job related problems</FindJob>
          <SearchJob>
            Search, apply, track and post a job all here on one platform. You
            dont need to worry anymore.
          </SearchJob>
          <div style={{ marginTop: "20px" }}>
            <SearchJobButton>Search for a job</SearchJobButton>
            <SearchButton>Search</SearchButton>
          </div>
        </div>
        <SecondDiv></SecondDiv>
      </div>
      <SecondRow style={{ paddingTop: "80px", paddingLeft: "390px" }}>
        <FindJob>We know your struggle, let us help you</FindJob>
        <SearchJob>
          Our platform aims to help the construction industries biggest problem,
          unemployment. Let us help you get a job.
        </SearchJob>
        <div style={{ marginTop: "20px" }}>
          <SearchButton style={{ marginLeft: "285px" }}>
            Register Now
          </SearchButton>
        </div>
      </SecondRow>
      <div>
        <Active>Actively Recruiting Companies</Active>
        <div style={{ display: "flex", marginTop: "30px" }}>
          {" "}
          <ActiveBox>
            <CompanyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></CompanyImage>
            <CompanyName>Company Name</CompanyName>
            <CompanyField>Company Field</CompanyField>
            <CompanyLocation>Location</CompanyLocation>
          </ActiveBox>
          <ActiveBox>
            <CompanyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></CompanyImage>
            <CompanyName>Company Name</CompanyName>
            <CompanyField>Company Field</CompanyField>
            <CompanyLocation>Location</CompanyLocation>
          </ActiveBox>
          <ActiveBox>
            <CompanyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></CompanyImage>
            <CompanyName>Company Name</CompanyName>
            <CompanyField>Company Field</CompanyField>
            <CompanyLocation>Location</CompanyLocation>
          </ActiveBox>
          <ActiveBox>
            <CompanyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></CompanyImage>
            <CompanyName>Company Name</CompanyName>
            <CompanyField>Company Field</CompanyField>
            <CompanyLocation>Location</CompanyLocation>
          </ActiveBox>
        </div>
      </div>
      <FourthRow>
        <Simple>Just few simple steps</Simple>
        <div
          style={{ display: "flex", marginLeft: "520px", marginTop: "30px" }}
        >
          <Seaker>JOB SEAKER</Seaker>
          <Recruiter>RECRUITER</Recruiter>
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>
            <FourthText>1.</FourthText>
            <FourthText>Search</FourthText>
            <Track>
              Search, apply, track and post a job all here on one platform. You
              dont need to worry anymore.
            </Track>
          </div>
          <div>
            <FourthText>2.</FourthText>
            <FourthText>Apply</FourthText>
            <Track>
              Search, apply, track and post a job all here on one platform. You
              dont need to worry anymore.
            </Track>
          </div>
          <div>
            <FourthText>3.</FourthText>
            <FourthText>Track</FourthText>
            <Track>
              Search, apply, track and post a job all here on one platform. You
              dont need to worry anymore.
            </Track>
          </div>
        </div>
        <SearchButton style={{ marginTop: "50px", marginLeft: "510px" }}>
          Register Now
        </SearchButton>
      </FourthRow>
      <div>
        <Active style={{ marginTop: "50px" }}>Recommended For You</Active>
        <div style={{ display: "flex" }}>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
        </div>
      </div>
      <div>
        <Active style={{ marginTop: "50px" }}>Trending Job Titles</Active>
        <div style={{ display: "flex" }}>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
        </div>
        <ViewBox>View More</ViewBox>
      </div>
      <div>
        <Active style={{ marginTop: "50px" }}>Jobs with high Salaries</Active>
        <div style={{ display: "flex" }}>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
          <RecommendBox>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <PostImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kHxnMfm2ALnRLgCSbcZuvRYgTDnNGxqiMw&usqp=CAU"></PostImg>
              <PostText> Junior Interior Designer</PostText>
              <MoreImg src="/images/more.png"></MoreImg>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>
          </RecommendBox>
        </div>
        <ViewBox>View More</ViewBox>
      </div>
      <SecondRow style={{ paddingTop: "80px", paddingLeft: "390px" }}>
        <FindJob>We know your struggle, let us help you</FindJob>
        <SearchJob>
          Our platform aims to help the construction industries biggest problem,
          unemployment. Let us help you get a job.
        </SearchJob>
        <div style={{ marginTop: "20px" }}>
          <SearchButton style={{ marginLeft: "285px" }}>
            Register Now
          </SearchButton>
        </div>
      </SecondRow>
    </>
  );
}
