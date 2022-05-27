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
const Havent = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f46430;
`;
const SecondRow = styled.div`
  width: 1921px;
  height: 170px;
  left: -4px;
  top: 629px;
  background: #f5f5f5;
  padding: 10px;
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
  margin-left: 680px;
  margin-top: 30px;
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
export default function StudentJobs() {
  const [openJob, setOpenJob] = useState("tab1");
  const [openJobSave, setOpenJobSave] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const openHandle = () => {
    setOpenJob(!openJob);
  };
  const openSaveHandle = () => {
    setOpenJobSave(!openJobSave);
    setOpenJob(false);
  };
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <>
      <div style={{ marginLeft: "20px" }}>
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
        <div
          style={{ marginTop: "20px", display: "flex", marginBottom: "50px" }}
        >
          <Havent>Haven’t Created a Resume Yet?</Havent>{" "}
          <Havent style={{ color: "Black" }}>Create Now</Havent>
        </div>
        <div
          style={{ marginTop: "20px", display: "flex", marginBottom: "50px" }}
        >
          <Havent>Want to post a job? </Havent>{" "}
          <Havent style={{ color: "Black" }}>Post Job</Havent>
        </div>
      </div>
      <SecondRow>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          Recent Search
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "700px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <div>Interior Designer</div>
            <div>Location</div>
          </div>
          <div>
            <div>Interior Designer</div>
            <div>Location</div>
          </div>
          <div>
            <div>Interior Designer</div>
            <div>Location</div>
          </div>
        </div>
      </SecondRow>
      <div>
        <div>
          <Active>Actively Recruiting Companies</Active>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              justifyContent: "space-between",
            }}
          >
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
        <div>
          <Active style={{ marginTop: "50px" }}>Recommended For You</Active>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
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
          <div style={{ display: "flex", marginTop: "30px" }}>
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
          <div style={{ display: "flex", marginTop: "30px" }}>
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
      </div>
    </>
  );
}
