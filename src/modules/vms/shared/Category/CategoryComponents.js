import React, { useState } from "react";
import "./Category.css";
import Styled from "styled-components";
import { Button, Checkbox } from "@mui/material";

import { styled } from '@mui/material/styles';


import { SelectMaterial } from "./categoryData";

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const TopContainer = Styled.div`
  margin-top: 4%;
  margin-left: 2.6%;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;

const Category = Styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;

  color: #1f1f1f;

  @media (max-width: 1366px) {
    font-size: 15px;
  }
`;

const OrangLine = Styled.div`
  margin-top: 20px;
  width: 100px;
  height: 0px;

  border: 3px solid #f24f17;

  @media (max-width: 1366px) {
    width: 70px;
    margin-top: 10px;
  }
`;

const ButtonContainer = Styled.button`
  width: 115px;
  height: 38px;
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #f24f17;

  @media (max-width: 1366px) {
    width: 112px;
  }
`;

const Para = Styled.div`
  margin-top: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;

  @media (max-width: 1366px) {
    margin-top: 20px;
    font-size: 12px;
  }
`;

const MainContent = Styled.div`
  display: flex;
  padding: 40px;
  @media (max-width: 1366px) {
    padding: 30px;
  }
`;
const NameContainer = Styled.div``;

const Search = Styled.input`
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  border-radius: 5px;

  display: flex;

  padding: 9px 4px 9px 40px;
  background: transparent url("/icons/search.svg") no-repeat 13px center;
  background-color: #f2f2f2;
  margin-top: 10px;
  height: 40px !important;
  border: none !important;

  @media (max-width: 1366px) {
    width: 100%;
    height: 30px;
    padding: 9px 4px 9px 30px;
    background: transparent url("/icons/search.svg") no-repeat 8px center;
    background-color: #f2f2f2;
  }
`;

const CategoryContent = Styled.div`
  padding: 0px 51px 0px 0px;
  border-right: 1px solid #696969;
  width: 100%;

  @media (max-width: 1366px) {
    padding: 0px 30px 0px 0px;
    width: 100%;
  }
`;

const CategoryDropDown = Styled.div`
  padding: 0px 30px 0px 40px;
  width: 410px;
  @media (max-width: 1366px) {
    padding: 0px 20px 0px 23px;
    width: 410px;
  }
`;

const DataContainer = Styled.div`
  display: flex;

  margin-top: 22px;
  box-sizing: border-box;
  width: 100%;
  height: 556px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 10px;

  @media (max-width: 1366px) {
    margin-top: 15px;
    width: 100%;
    height: 465px;
  }
`;

const FirstContainer = Styled.div`
  width: 100%;
  height: 553px;

  background: #f2f2f2;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 1366px) {
    width: 202px;
    height: 462px;
  }
`;

const SecondContainer = Styled.div`
  width: 100%;
  height: 554px;
  left: 281px;
  top: 7px;
  border: 1px solid rgba(31, 31, 31, 0.5);

  @media (max-width: 1366px) {
    width: 202px;
    height: 462px;
  }
`;

const ThirdContainer = Styled.div`
  width: 100%;
  height: 554px;
  left: 281px;
  top: 7px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-left: none;
  border-right: none;
  @media (max-width: 1366px) {
    width: 202px;
    height: 462px;
  }
`;

const MaterialName = Styled.div`
  padding: 10px 0px 0px 25px;
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  /* identical to box height */
  color: rgba(31, 31, 31, 0.3);

  @media (max-width: 1366px) {
    font-size: 14px;
  }
`;

const MaterialContainer = Styled.div`
  width: 300px;
  padding: 0px 0px 1px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1366px) {
    font-size: 14px;
    width: 202px;
  }
`;

const Name = Styled.div`
  padding-right: 40px;
  align-items: left;
  font-size: 15px;
  @media (max-width: 1366px) {
    font-size: 12px;
  }
`;

const Image = Styled.img`
  margin-right: 20px;
  @media (max-width: 1366px) {
    margin-right: 10px;
  }
`;

const Table = Styled.div`
  margin-top: 32px;
  overflow:scroll;
  width: 397px;
  height: 305px;
  left: 1393px;
  top: 403px;

  background: #ffffff;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  border: opacity(0.2);

  @media (max-width: 1366px) {
    width: 310px;
    height: 245px;
  }
`;


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function CategoryComponents() {

  const [expanded, setExpanded] = React.useState('panel1');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [showList, setShow] = useState(false);
  const [showSub, setSub] = useState(false);

  return (
    <>
      <TopContainer>
        <NameContainer>
          <Category>Category</Category>
          <OrangLine></OrangLine>
          <Para>
            Please input requested details below. Click submit once you are done
          </Para>
        </NameContainer>

        <ButtonContainer>Submit</ButtonContainer>
      </TopContainer>

      <MainContent>
        <CategoryContent>
          <Search placeholder="search" type="search" />

          <DataContainer>
            <FirstContainer>
              <MaterialName>Material</MaterialName>

              {SelectMaterial.map((material) => (
                <MaterialContainer>
                  <Checkbox></Checkbox>
                  <Name>{material}</Name>
                  <Image src="icons/next-arrow.svg" alt="next" />
                </MaterialContainer>
              ))}
            </FirstContainer>

            <SecondContainer>
              <div className="mt-5">
                {SelectMaterial.map((material) => (
                  <MaterialContainer>
                    <Checkbox></Checkbox>
                    <Name>{material}</Name>
                    <Image src="icons/next-arrow.svg" alt="next" />
                  </MaterialContainer>
                ))}
              </div>
            </SecondContainer>

            <ThirdContainer>
              <div className="mt-5">
                {SelectMaterial.map((material) => (
                  <MaterialContainer>
                    <Checkbox></Checkbox>
                    <Name>{material}</Name>
                    <Image src="icons/next-arrow.svg" alt="next" />
                  </MaterialContainer>
                ))}
              </div>
            </ThirdContainer>
          </DataContainer>
        </CategoryContent>
        <CategoryDropDown>
          <Category>Your Categories</Category>
          <Para>
            All categories that you have chosen will be shown here. Click cross
            to remove that particular category or sub-category.
          </Para>

          <Table>
          <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Building Material</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {SelectMaterial.map((material) => (
                <MaterialContainer>
              
                  <Name>{material}</Name>
                  
                </MaterialContainer>
              ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Plumbing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Electric</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
          </Table>
        </CategoryDropDown>
      </MainContent>
    </>
  );
}
