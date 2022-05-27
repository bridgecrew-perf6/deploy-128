import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header";

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
const DropButton = styled.div`
  background: #ffffff;
  border: 1px solid #696969;
  border-radius: 10px;
  padding: 5px;
`;
const Vector = styled.img`
  margin-left: 5px;
`;
const RecommendBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 184px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
  margin-top: 10px;
`;
const PostImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
const MoreImg = styled.img`
  width: 20px;
  height: 15px;
  margin-top: 10px;
  margin-left: 40px;
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
const SecondColumn = styled.div`
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 10px;
`;
const PurposeText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #1f1f1f;
`;
const DetailsText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #1f1f1f;
`;
export default function StudentJobs() {
  return (
    <>
      <Header />
      <div>
        {" "}
        <div style={{ marginLeft: "45px" }}>
          <JobInput placeholder="Job Title"></JobInput>
          <JobInput
            placeholder="Job Location"
            style={{ marginLeft: "30px" }}
          ></JobInput>
          <SearchButton>Search</SearchButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1015px",
            marginTop: "35px",
            marginLeft: "45px",
          }}
        >
          <DropButton>
            Sort By <Vector src="/images/Vector.svg"></Vector>
          </DropButton>
          <DropButton>
            Job Type <Vector src="/images/Vector.svg"></Vector>
          </DropButton>
          <DropButton>
            Experience Level <Vector src="/images/Vector.svg"></Vector>
          </DropButton>
          <DropButton>
            Company <Vector src="/images/Vector.svg"></Vector>
          </DropButton>
          <DropButton>
            On-Site/Remote <img src="/images/Vector.svg"></img>
          </DropButton>
          <DropButton>
            Date Posted <img src="/images/Vector.svg"></img>
          </DropButton>
          <DropButton>
            Location <img src="/images/Vector.svg"></img>
          </DropButton>
          <DropButton>
            Industry <img src="/images/Vector.svg"></img>
          </DropButton>
        </div>
        <div
          style={{
            background: "#F5F5F5",
            display: "flex",
            marginTop: "35px",
            padding: "40px",
          }}
        >
          <div>
            {" "}
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
          <SecondColumn>
            <div style={{ display: "flex" }}>
              <PostText> Junior Interior Designer</PostText>
            </div>
            <TrendCompany>Company Name</TrendCompany>
            <TrendLocation>Location</TrendLocation>
            <TrendApplicant>24 Applicants</TrendApplicant>
            <TrendPosted>Posted 8d ago</TrendPosted>

            <PurposeText>Our Purpose</PurposeText>
            <DetailsText>
              Our Purpose We work to connect and power an inclusive, digital
              economy that benefits everyone, everywhere by making transactions
              safe, simple, smart and accessible. Using secure data and
              networks, partnerships and passion, our innovations and solutions
              help individuals, financial institutions,
            </DetailsText>
            <PurposeText>Job Title</PurposeText>
            <DetailsText>Designer</DetailsText>
            <PurposeText>Overview</PurposeText>
            <DetailsText>
              Our Purpose We work to connect and power an inclusive, digital
              economy that benefits everyone, everywhere by making transactions
              safe, simple, smart and
            </DetailsText>
            <PurposeText>Role</PurposeText>
            <DetailsText>
              {" "}
              Our Purpose We work to connect and power an inclusive, digital
              economy that benefits everyone, everywhere by making transactions
              safe, simple, smart and accessible. Using secure data and
              networks, partnerships and passion, our innovations and solutions
              help individuals, financial institutions,
            </DetailsText>
            <PurposeText>All about you - Necessary Skill </PurposeText>
          </SecondColumn>
        </div>
      </div>
    </>
  );
}
