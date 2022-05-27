import React from 'react'
import styled from "styled-components";
import Vector from "../../assets/images/Vector(1).png"
import Vector1 from "../../assets/images/Vector.png"

const MAinDiv = styled.div`
background: #696969;
width: 100%;
height:768px;
display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
width: 95px;
height: 95px;
position: absolute;
`;
const ImgCenter = styled.img`
width: 40px;
height:40px;
`;
const fourthComp = () => {
  return (
   <>
        <MAinDiv><Img src={Vector}/>
        <ImgCenter src={Vector1}/></MAinDiv>
 
   </>
  )
}

export default fourthComp