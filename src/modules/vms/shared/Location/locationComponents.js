import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from 'material-ui/Divider';
import './location.css';
import Styled from 'styled-components';
import axios from 'axios';
import { Select } from '@material-ui/core';
import { MenuItem } from 'material-ui';
import TableComponent from './TableComponent';
import AddLocation from './addLocation';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));

const TopContainer = Styled.div`
  margin-top: 4%;

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

  @media (max-width: 1400px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  
  }
`;

const OrangLine = Styled.div`
  margin-top: 20px;
  width: 100px;
  height: 0px;

  border: 3px solid #f24f17;

  @media (max-width: 1400px) {
    width: 70px;
    margin-top: 10px;
  border: 2px solid #f24f17;

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

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
    margin-top: 20px;
    font-size: 12px;
  }
`;

const NameContainer = Styled.div``;

const MainContainer = Styled.div`
display:flex;

width:100%;
  height:89.17%;

  @media (max-width:768px) {
      display:none;
  }
 

 
`;

const PinCodeInputContainer = Styled.div`
     border-right:4px solid #d6d6d6;
     width:64.36%;
     padding-right:20px;


    @media (max-width: 1400px) {
      width:63.24%;
      padding:10px;
         
    }

    @media (max-width: 768px) {
     display:none;
          
    }

`;

const PinCodeTableContainer = Styled.div`
padding:36px 0px 0 45px;
width: 30.74%;


    
`;

const LabelP = Styled.p`
  font-family: "Inter";
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-top: 15px;

  @media (max-width: 1400px) {
    font-size: 15px;
       
  }

  @media (max-width: 768px) {
    font-size: 15px;
  

       
  }



`;
const TextInput = Styled.input`
  max-width: 850px;
  width: 100%;
  height: 55px;

  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);

  border-radius: 5px;
  outline: none;
  margin-top: 11px;
`;

const AddToList = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:29px;
  max-width: 850px;
  width: 100%;

  @media (max-width: 1400px) {
    max-width: 593px;
    width: 100%;
       
  }

`;

const AddPara = Styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #1F1F1F;

@media (max-width: 1400px) {
  font-size: 13px;
    
}

@media (max-width: 768px) {
  font-size: 12px;
  width:50%;
  margin-top:0px;
     
}
`;

const AddToListButton = Styled.div`
`;

const Button = Styled.div`
width:120px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FF865A;


@media (max-width: 1400px) {
  font-size: 14px;
  width:110px;
     
}

`;

const LocationTablePara = Styled.p`
margin-top:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
width: 100%;
color: #1F1F1F;

@media (max-width: 1400px) {
  font-size: 12px;
  width: 315px;
     
}
`;

const TotalTable = Styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: rgba(31, 31, 31, 0.3);

@media (max-width: 1400px) {
  font-size: 12px;
     
}



`;

const Table = Styled.table`
width:397px ;

@media (max-width: 1575px) {
  width:350px;
      
 

@media (max-width: 1400px) {
 width:310px;
     
}
`;
const Tr = Styled.tr`
border:1px solid black;
border-radius:10px;

@media (max-width: 1400px) {
 height:44px;
      
 }
`;
const Td = Styled.td`
padding:0px 10px;

border:1px solid black;

`;

const Tdelete = Styled.td`
display:flex;
padding:0px 10px;
justify-content:center;
align-item:center;
margin: 50% auto;
width:0px;
  
`;

const AppliedTab = Styled.div`
  display: flex;
  margin-top: 30px;
    
    

  `;

const Tab = Styled.div`
  height: 39px;

  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;

const PostButton = Styled.button`
  border: none;
  min-width: 148px;
`;
const DraftButton = Styled.button`
  border: none;
  min-width: 148px;
`;

const ToggaleContainer = Styled.div`
    display:none !important;

    @media (max-width: 768px) {
      display:flex !important;
    }  
      

`;

export default function LocationComponents() {
	const [ activeTab, setActiveTab ] = useState('tab1');

	const handleTab1 = () => {
		// update the state to tab1
		setActiveTab('tab1');
	};
	const handleTab2 = () => {
		// update the state to tab2
		setActiveTab('tab2');
	};

	return (
		<div>
			<TopContainer>
				<NameContainer>
					<Category>Location Served</Category>
					<OrangLine />
					<Para>Please input requested details below. Click submit once you are done</Para>
				</NameContainer>
                
				<ButtonContainer>Submit</ButtonContainer>
			</TopContainer>

			<MainContainer>
				<PinCodeInputContainer>
					<LabelP>Location</LabelP>
					<TextInput type="search" plcaeholder="121005" />

					<AddToList>
						<AddPara>If this location is correct please add the pincode to the list</AddPara>
						<AddToListButton>
							<Button>+ ADD LOCATION</Button>
						</AddToListButton>
					</AddToList>
				</PinCodeInputContainer>

				<PinCodeTableContainer>
          <LabelP>Add Location</LabelP>
					<LocationTablePara>
						All locations that you have chosen will be shown here. Click cross button to remove a particular
						location.
					</LocationTablePara>
					<TotalTable>Total:50</TotalTable>
          <Table>
      <Tr>
        <Td>
          <br />
          <span>{}</span>
        </Td>
        <Tdelete>
          <img src="icons/delete-icon.png" alt="delete" />
        </Tdelete>
      </Tr>
      <Tr>
        <Td>
          123456
          <br />
          <span>Gurugram, Haryana, India</span>
        </Td>
        <Tdelete>
          <img src="icons/delete-icon.png" alt="delete" />
        </Tdelete>
      </Tr>{" "}
      <Tr>
        <Td>
          123456
          <br />
          <span>Gurugram, Haryana, India</span>
        </Td>
        <Tdelete>
          <img src="icons/delete-icon.png" alt="delete" />
        </Tdelete>
      </Tr>{" "}
      <Tr>
        <Td>
          123456
          <br />
          <span>Gurugram, Haryana, India</span>
        </Td>
        <Tdelete>
          <img src="icons/delete-icon.png" alt="delete" />
        </Tdelete>
      </Tr>{" "}
      <Tr>
        <Td>
          123456
          <br />
          <span>Gurugram, Haryana, India</span>
        </Td>
        <Tdelete>
          <img src="icons/delete-icon.png" alt="delete" />
        </Tdelete>
      </Tr>
    </Table>
				</PinCodeTableContainer>
			</MainContainer>

			<ToggaleContainer className="row">
				<AppliedTab>
					<Tab>
						<PostButton className={activeTab === 'tab1' ? 'active-post' : ''} onClick={handleTab1}>
							Add Location
						</PostButton>
						<DraftButton className={activeTab === 'tab2' ? 'active-post' : ''} onClick={handleTab2}>
							Your Location
						</DraftButton>
					</Tab>
				</AppliedTab>
			</ToggaleContainer>
			{activeTab === 'tab1' ? <AddLocation /> : ''}

			{activeTab === 'tab2' ? <TableComponent /> : ''}
		</div>
	);
}
