import React from 'react';
import styled from "styled-components";
import Banner from "../../assets/images/Banner.webp";

const Div = styled.div`
position: relative;
`;
const Img = styled.img`
${'' /* position: absolute; */}
width: 100%;
height: 700px;
`;
const Heading = styled.div`
position: absolute;

font-family: Inter;
font-size: 75px;
font-weight: 700;
line-height: 91px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
left: 16%;
    top: 200px;

`;
const Heading2 = styled.div`
position: absolute;

font-family: Inter;
font-size: 35px;
font-weight: 400;
line-height: 42px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
top: 330px;
    left: 30%;


`;
const Button = styled.button`
color: #fff;
position: absolute;
width: 250px;
height: 50px;
left: 40%;
top: 450px;

background: #FF7A59;
border: 1px solid #FF7A59;
border-radius: 5px;
`;

const banner = () => {
  return (
<>
    <Div>
    <Img src={Banner}/>
    <Heading>
    Transforming Ecosystem.
    </Heading>
    <Heading2>Starting With Construction Sector</Heading2>
    <Button>REGISTER NOW</Button>
    </Div>
</>  )
}

export default banner