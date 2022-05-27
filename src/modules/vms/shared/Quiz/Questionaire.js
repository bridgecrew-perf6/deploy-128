import { style } from '@mui/system';
import React,{useState} from 'react'
import styled from 'styled-components';
import PublishPage from './PublishPage';
import QuestionCard from './QuestionCard';

const MainDiv = styled.div`
  margin-top: 42px;
  width: 90%;
`;
const MainText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f24f17;
`;
const GreaterThan = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
  font-size: 40px;
  line-height: 48px;
  content: "";
  color: #000000;
`;
const OtherText = styled.label`
  font-family: "Inter";
  font-style: normal;
  margin-left: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;
const Heading = styled.div`
margin-top:50px;
`;
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
  margin-top: 1.9em;
`;
const Div=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;
const SelectField=styled.div`
width: 820px;
height: 66px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 10px;
display: flex;
padding: 10px;
align-items: center;
margin-top: 37px;
flex-direction: row;
justify-content: space-between;
`;
const TextDiv=styled.div`
display: flex;
flex-direction: column;
`
const TitleText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;

color: #1F1F1F;
`;
const SubtitleText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
color: #1F1F1F;
`;
const OrTextDiv=styled.div`
width: 100%;
margin-top: 3.4em;
margin-bottom:3.6em;
`
const OrText=styled.div`
font-family: 'Roboto';
width: 100%;
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 22px;
color: #1F1F1F;
`
const TotalItemDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: end;
padding: 10px;
align-items: center;
`
const TotalText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
margin-right: 5px;
line-height: 19px;
color: #1F1F1F;
`
const TotalValue=styled.div`
width: 31px;
height: 20px;
background: #F5F5F5;
border-radius: 1px;
`
const Count=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #1F1F1F;
`;
const QuesionDiv=styled.div`
display: flex;
flex-direction: column;

`;
const QuestionTitleDiv=styled.div`
display: flex;
margin-top: 24px;
flex-direction: row;
width: 820px;
background: #F5F5F5;
border: 1px solid #000000;
border-radius: 10px;
padding:10px;
height: 66px;
margin-bottom: 26px;
`;
const HeadingDiv=styled.div`
display:flex;
flex-direction:row;
`;
const SnoText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 30px;
color: #000000;
`
const QuesTionText=styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #000000;
`;
const CardDiv=styled.div`
 display: grid;
  grid-template-columns: auto auto;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 10px;`;
const DeleteButton=styled.img``;

const BottomDiv=styled.div`
width: 820px;
height: 50px;
border: 1px solid rgba(31, 31, 31, 0.5);
border-radius: 5px;
`;
const InputDiv=styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px ;
`;
const Input=styled.input`
width: 100%;
border: none;
`;
const Image=styled.img``;
const BottomButton=styled.div`
width: 100%;
`;
const ButtonDiv=styled.div`
display: flex;
flex-direction: column;
float: right;
`;

const AddtoList=styled.button`
background: #000000;
width: 233px;
height: 50px;
color: white;
margin-top: 27px;
border-radius: 5px;`;
const NextButton=styled.button`
background: #000000;
width: 233px;
height: 50px;
color: white;
margin-top: 128px;
border-radius: 5px;`;


const Questionaire = () => {

  const[next,setNext]=useState(false);
    const data=[
        {
            sno:"A",
            option:"Qui numquam tenetur aut"
        },
        {
            sno:"B",
            option:"Qui numquam tenetur aut"
        },
        {
            sno:"C",
            option:"Qui numquam tenetur aut"
        },
        {
            sno:"D",
            option:"Qui numquam tenetur aut"
        }
    ]
  return (
   <>
   {next ? (
     <PublishPage></PublishPage>
   ):(
    <MainDiv>
    <OtherText>Create a New Test</OtherText>
    <GreaterThan>&gt;</GreaterThan>
    <MainText>Add Questionnaire</MainText>
    <GreaterThan>&gt;</GreaterThan>
    <OtherText>Publish</OtherText>

    <Heading>
        <Label>Quiz</Label>
        <Line></Line>
        <Div>
          <Text>Create Quiz for your students.</Text>
        </Div>
      </Heading>


      <SelectField>
          <TextDiv>
              <TitleText>Want to Import Multiple Questions?</TitleText>
              <SubtitleText>Download our CSV file and input all your Questions in just minutes.</SubtitleText>
          </TextDiv>
          <div>downarroe</div>
      </SelectField>
      <OrTextDiv>
           <OrText>---------------------------------------------or-------------------------------------------</OrText>
           <TotalItemDiv>
               <TotalText>Total</TotalText>
               <TotalValue><Count>01</Count></TotalValue>
          </TotalItemDiv>
      </OrTextDiv>

      <QuesionDiv>
          <QuestionTitleDiv>
              <HeadingDiv>
              <SnoText>1.</SnoText>
              <QuesTionText>Qui numquam tenetur aut illo quidem est neque repudiandae et impedit quia ut dolor nihil eos illo delectus aut </QuesTionText>
              </HeadingDiv>
              <DeleteButton src="./images/deleteButton.svg"></DeleteButton>

          </QuestionTitleDiv>

          
          {/* <CardDiv>
          {data.map((ele)=>(
              <QuestionCard
              sno={ele.sno}
              option={ele.option}
              
              />
              
          ))}
          </CardDiv> */}
          <QuestionTitleDiv>
              <HeadingDiv>
              <SnoText>2.</SnoText>
              <QuesTionText>Qui numquam tenetur aut illo quidem est neque repudiandae et impedit quia ut dolor nihil eos illo delectus aut </QuesTionText>
              </HeadingDiv>
              <DeleteButton src="./images/deleteButton.svg"></DeleteButton>

          </QuestionTitleDiv>
      </QuesionDiv>
      <BottomDiv>
        <InputDiv>
        <Image src='./images/quizImageGallery.svg'></Image>
        <Input placeholder="Type Your Question here"></Input>
        </InputDiv>

        <BottomButton>
          <ButtonDiv>
          <AddtoList>Add to List</AddtoList>
          <NextButton onClick={()=>{setNext(true)}}>Next</NextButton>
          </ButtonDiv>
        </BottomButton>
       

      </BottomDiv>
    </MainDiv>

   )}
  
  
   </>
  )
}

export default Questionaire