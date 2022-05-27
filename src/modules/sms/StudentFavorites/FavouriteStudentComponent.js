import React from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

const StudFavTopCont = styled.div`
  display:flex; 
  align-items:center;
  justify-content:space-between;
`;

const FavContainerRow = styled.div`
  display:flex;
  flex-direction:column;
`;

const FavHead= styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;

const UnderlineHr = styled.div`
  width: 100px;
  height:0;
  margin-top:20px;
  border-bottom: 3px solid #F24F17;
`;

const FavTopPara = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top:30px;
`;

const FavSearchInput = styled.input`
  width: 250px;
  height: 40px;
  background-color: #F2F2F2;
  border-radius: 2px;
  border:none;
  outline:none;
  padding-left:9%;
`;

const FlexDiv = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  justify-content:space-between;
`;
const TotalNum = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  justify-content:space-between;
  width:85px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const Totalspan = styled.span`
  background: #F5F5F5;
  border-radius: 1px;
  padding:1%;
  width: 31px;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const FavGridContentDiv = styled.div`
  max-width:320px;
  width:100%;
  height:250px;
  margin-right:10px;
  position:relative;
  border-radius: 10px;
  display:flex;
  overflow:hidden;
  justify-content:center;
`;

const FavGridDiv=styled.div`
  display: grid;
  grid-gap: 20px;
  place-content:center;
  grid-template-columns: repeat(auto-fit,320px);
  // grid-template-columns: auto auto auto auto;
  margin-top:30px;
`;

const NewboardDiv = styled.div`
  background: #F0F0F0;
  border: 1px dashed #696969;
  box-sizing: border-box;
  border-radius: 10px;
  width: 320px;
  height: 250px;
  display:flex;
  align-items:center;
  place-content:center;
  flex-direction:column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #696969;
`;
  
const BoardContainer = styled.div`
  width: 320px;
  height: 250px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(17, 17, 17, 0.8) 100%);
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  position:relative;
  position:absolute;
`;

const Boardname = styled.div`
  position:absolute;
  bottom:10px;
  display:flex;
  align-items:center;
  place-content:center;
  width:100%;
  justify-content:space-between;
  padding:20px;
`;

const ContainerIcon = styled.div`
  background: #ffff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 7px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export default function FavoritePmsComponent() {
  return (
    <>
     <StudFavTopCont>
     <FavContainerRow>
      <FavHead>Favorites</FavHead>
      <UnderlineHr/>
      <FavTopPara>Create Your Inspiration Board Here</FavTopPara>
      </FavContainerRow>
    </StudFavTopCont>
    <FlexDiv>
    <FlexDiv>
    <FiSearch style={{position:"absolute", left:"1%" , color: "#696969" }}/>
    <FavSearchInput placeholder='Search'/>
    </FlexDiv>
    <TotalNum>Total <Totalspan>50</Totalspan></TotalNum>
    </FlexDiv>
    <FavGridDiv>
    <FavGridContentDiv>
      <NewboardDiv>
          <img src='../Bigplus.svg' slt='plus' />
         Add New Board
      </NewboardDiv>
    </FavGridContentDiv>
    <FavGridContentDiv>
        <img src='https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <BoardContainer>
         <ContainerIcon>
         <img src='../trash.svg' />
         </ContainerIcon>
           <Boardname>
            Board Name
           <FlexDiv>
           <img src='../BoxmenuWhite.svg' />
            <span>100</span>
           </FlexDiv>
            </Boardname>
            
        </BoardContainer>
    </FavGridContentDiv>
    <FavGridContentDiv>
        <img src='https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <BoardContainer>
         <ContainerIcon>
         <img src='../trash.svg' />
         </ContainerIcon>
           <Boardname>
            Board Name
           <FlexDiv>
           <img src='../BoxmenuWhite.svg' />
            <span>100</span>
           </FlexDiv>
            </Boardname>
            
        </BoardContainer>
    </FavGridContentDiv>
    <FavGridContentDiv>
        <img src='https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <BoardContainer>
         <ContainerIcon>
         <img src='../trash.svg' />
         </ContainerIcon>
           <Boardname>
            Board Name
           <FlexDiv>
           <img src='../BoxmenuWhite.svg' />
            <span>100</span>
           </FlexDiv>
            </Boardname>
            
        </BoardContainer>
    </FavGridContentDiv>
    <FavGridContentDiv>
        <img src='https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <BoardContainer>
         <ContainerIcon>
         <img src='../trash.svg' />
         </ContainerIcon>
           <Boardname>
            Board Name
           <FlexDiv>
           <img src='../BoxmenuWhite.svg' />
            <span>100</span>
           </FlexDiv>
            </Boardname>
            
        </BoardContainer>
    </FavGridContentDiv>
    <FavGridContentDiv>
        <img src='
       https://images.unsplash.com/photo-1651571726753-75306524c517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <BoardContainer>
         <ContainerIcon>
         <img src='../trash.svg' />
         </ContainerIcon>
           <Boardname>
            Board Name
           <FlexDiv>
           <img src='../BoxmenuWhite.svg' />
            <span>100</span>
           </FlexDiv>
            </Boardname>
            
        </BoardContainer>
    </FavGridContentDiv>

    </FavGridDiv>
    </>
  )
}
