import React from 'react'
import styled from "styled-components";
import First from "../../assets/images/01.png"
import Two from "../../assets/images/02.png"
import Third from "../../assets/images/03.png"


const MAinDiv = styled.div`
padding-top: 150px;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 83px;
`;
const FirstDiv = styled.div`
font-family: Inter;
font-size: 50px;
font-weight: 700;
line-height: 61px;
letter-spacing: 0em;
text-align: center;
margin-bottom:30px;
`;
const Second = styled.div`
font-family: Inter;
font-size: 20px;
font-weight: 300;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 50px;

`;
const Button = styled.div`
width: 250px;
    height: 50px;
    background: #FF7A59;
    border: 1px solid #FF7A59;
    border-radius: 5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

const EighthComp = () => {
  return (
    <MAinDiv>
        <FirstDiv>
        Register in just 3 simple steps
        </FirstDiv>
        <Second>Follow just these three simple steps to become a part of <br/> our community and enjoy our features</Second>
        <div style={{display:"flex",justifyContent:"space-around",marginBottom:90}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<img style={{width:130}} src={First}/>
<Second>Create Account</Second>
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum.</span>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<img style={{width:130}} src={Two}/>

<Second>Create Account</Second>
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum.</span>

</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<img style={{width:130}} src={Third}/>

<Second>Create Account</Second>
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor felis, vulputate nec condimentum.</span>

</div>
        </div>
        <Button>REGISTER NOW</Button>
    </MAinDiv>
  )
}

export default EighthComp