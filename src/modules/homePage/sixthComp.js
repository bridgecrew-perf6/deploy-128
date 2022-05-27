import React from 'react'
import styled from "styled-components";

const MAinDiv = styled.div`
margin-top: 150px;
margin-left: 100px;
display: flex;
flex-direction:row;
justify-content: space-around;
margin-bottom: 50px;

`;
const FirstDiv = styled.div`
width: 40%;
`;
const SecondDiv = styled.div`
display: flex;
width: 50%;
    justify-content: space-around;

`;

const Heading = styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 61px;
margin-bottom: 30px;
`;
const Span = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 25px;
margin-bottom: 60px;
`;

const Button = styled.div`

display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

width: 250px;
height: 50px;
left: 100px;

background: #FF7A59;
border: 1px solid #FF7A59;
border-radius: 5px;
`;
const H1 = styled.h1`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 73px;
color: #FF7A59;
`;

const sixthComp = () => {
  return (
    <MAinDiv>
        <FirstDiv>
<Heading>Our Community</Heading>
<Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum.</Span>
<Button>KNOW MORE</Button>

        </FirstDiv>
        <SecondDiv>
        
<div><H1>16K+</H1><h2>Sellers</h2></div>
<div><H1>16K+</H1><h2>Sellers</h2></div>
<div><H1>16K+</H1><h2>Sellers</h2></div>


        </SecondDiv>
    </MAinDiv>
  )
}

export default sixthComp