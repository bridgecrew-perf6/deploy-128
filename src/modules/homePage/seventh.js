import React from 'react'
import styled from "styled-components";
import Comma from "../../assets/images/comma.png"


const MAinDiv = styled.div`
padding-top:150px;
background: #F5F5F5;
padding-bottom: 30px;
padding-left:100px;
padding-right:100px;

`;
const FirstDiv = styled.div`
margin-bottom:30px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 61px;
/* identical to box height */
text-align: center;


`;


const Circle = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background: #D9D9D9;
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
`;
const Span = styled.div`
font-family: Inter;
font-size: 25px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

`;
const Img = styled.img`

width: 41px;
height: 32px;
margin-bottom: 30px;
margin-top: 50px;
`;

const SecondDiv = styled.div`

width: 500px;
    height: 377px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 0 40px;
`;
const Span2 = styled.div`
`;

const seventh = () => {
  return (
    <MAinDiv>

        <FirstDiv>
        What people say about us
        </FirstDiv>
        <SecondDiv>
<Img src={Comma}/>
<Div>
    <Span>Full Name</Span>
  
    <Circle></Circle>
</Div>
<Span2>Seller</Span2>
<span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum. consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum.
    </span>
        </SecondDiv>
        
    </MAinDiv>
  )
}

export default seventh