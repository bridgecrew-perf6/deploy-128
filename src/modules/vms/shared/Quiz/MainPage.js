import React,{useState} from 'react'
import styled from 'styled-components';
import CreateNewTest from './CreateNewTest';
import PublishPage from './PublishPage';

const mainDiv = styled.div``;
const Heading = styled.div``;
const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #1f1f1f;
  margin-bottom: 0;
`;
const Line = styled.div`
  outline: 2px solid #ff7a59;
  width: 100px;
  margin-top: 1.2em;
`;
const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  margin-bottom: 0;
`;
const Div=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 1.9em;
`;

const BottomDiv=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const TestText=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;`;

const Button =styled.button`
font-style: normal;
font-weight: 600;
margin-top: 13px;
font-size: 20px;
width: 946px;
height: 50px;
color :white;
align-items: center;
text-align: center;
cursor: pointer;
background: #F24F17;
line-height: 24px;`

const MainPage = () => {

  const [nextPage,setNextPage]=useState(false);

  return (
      <>
      {nextPage ? (<CreateNewTest />) :(
        <mainDiv>
        <Heading>
          <Label>Quiz</Label>
          <Line></Line>
          <Div>
            <Text>Create Quiz for your students.</Text>
          </Div>
        </Heading>
  
        <BottomDiv>
          <img src="./images/quizimage.svg"></img>
            <TestText>No Test Found</TestText>
            <Button onClick={()=>{
                setNextPage(true);
            }}>Click Here To create Quiz</Button>
        </BottomDiv>
        </mainDiv>
       
      )}
    </>
  );
}

export default MainPage