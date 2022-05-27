import React from 'react'
import Styled from 'styled-components';



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
const PinCodeTableContainer = Styled.div`


display:none;

@media (max-width: 768px) {
  display:flex;
  flex-direction:column;
  
      
}

    
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




const TableComponent = () => {
  return (
    <PinCodeTableContainer>
    <LabelP>Your Locations</LabelP>

    <LocationTablePara>
      All locations that you have chosen will be shown here. Click cross
      button to remove a particular location.
    </LocationTablePara>

    <TotalTable>Total 50</TotalTable>
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
  )
}

export default TableComponent