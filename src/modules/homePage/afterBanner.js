import React from 'react';
import styled from "styled-components";


const MainDiv = styled.div`
height: 717px;
background: #FFF;
display: flex;
margin-top:150px;
margin-left:100px;
margin-right:100px;

`;
const FirstDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;

`;
const Span = styled.span`
font-family: Inter;
font-size: 50px;
font-weight: 700;
line-height: 61px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 30px;

`;
const Span2 = styled.span`
font-family: Inter;
font-size: 35px;
font-style: italic;
font-weight: 600;
line-height: 42px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 30px;

`;
const SubSpan = styled.span`
font-weight: 600;
font-size: 35px;
line-height: 42px;
color: #FF7A59;
`;
const Span3 = styled.span`
margin-bottom: 50px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
`;
const Button = styled.button`
color:#FFFFFF;
width: 250px;
height: 50px;
left: 100px;
top: 1575px;

background: #FF7A59;
border: 1px solid #FF7A59;
border-radius: 5px;
`;

const SecondDiv = styled.div`
width: 50%;

`;
const SubDiv = styled.div`
position: absolute;
width: 850px;
height: 417px;
${'' /* left: 970px; */}
background: #F5F5F5;
border-radius: 10px;
`;

const afterBanner = () => {
  return (
<MainDiv>
<FirstDiv>
<Span>Idea Behind ML</Span>
<Span2><SubSpan>India’s First</SubSpan> Platform Tranforming Ecosystem Of The Construction Industry </Span2>
<Span3>By 2025, the construction industry is expected to become world’s 2nd largest industry. To capitalize this opportunity this industry needs to align with global standards. Hence, MaterialLibrary.</Span3>
<Button>KNOW MORE</Button>
</FirstDiv>
<SecondDiv>
    <SubDiv></SubDiv>
</SecondDiv>

</MainDiv>  )
}

export default afterBanner