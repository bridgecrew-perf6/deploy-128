import React from "react";
import Modal from "@mui/material/Modal";
import "./projectmodel.css";
import PortfolioImageUploader from "./PortfolioImageUploader";
import styled from "styled-components";

const Container = styled.div`
  width: 1120px !important;
  min-height: 610px !important;
  background-color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
`;

const TopContainer = styled.div`
  padding: 30px 55px 0 55px;
`;

const ContainerRow = styled.div`
  height: 69px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #1f1f1f;
`;

const ContainerCol = styled.div`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const Image = styled.img`
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-right: 0px;
  float: right;
`;

const TopLine = styled.div`
  border-bottom: 1px solid rgba(105, 105, 105, 0.5);
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 55px 55px 0px 55px;
`;

const Navigation = styled.div`
  display: flex;
  height: 80px;
`;

const Para = styled.p`
  margin-top: 20px;
  margin-right: 50px;
`;

const ParaCircle = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  background: #fff;
  border: 2px solid #696969;
  color: #696969;
  text-align: center;
  font-family: "Inter";
  font-style: normal;

  padding: 6px 11px 5px 11px;
  line-height: 25px;
`;

const CircleName = styled.span`
  margin-left: 10px;
`;

const UploadArea = styled.div`
  height: 329px;
`;

const IdealSize = styled.div`
  margin-top: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
`;

const ThumbNail = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #1f1f1f;
`;

const Button = styled.button`
  width: 250px !important;
  max-height: 50px;
  background: #1f1f1f !important;
  border-radius: 5px;
  margin-top: 30px;
`;

const ContainerBottom = styled.div`
  padding: 0px 55px 30px 55px;
`;



export default function AddPortfolioImage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleOpen();
        }}
        class="form-control btn btn-dark text-white addproject-field-height-button float-right NextButton"
      >
        NEXT
      </button>
      {/* <img  className="card_cross_image" src="/icons/cross.svg" alt="delete_project" /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Container className="border border-dark">
        <TopContainer className="container_add_content_top">
        <ContainerRow className="row  addproject_heading">
          <Title className="col add-project-title">Add Project</Title>
          <ContainerCol className="col ">
            <Image
              onClick={handleClose}
              className="card_add"
              src="/icons/cross_add.svg"
              alt="cross_add"
            />
          </ContainerCol>
        </ContainerRow>
      </TopContainer>
          <TopLine></TopLine>
          <ContentContainer className="container_add_content_middle">
            <ContainerRow className="row">
              <Navigation>
                <Para>
                  <ParaCircle className="circle-around-number circle-around-number_one_padding">
                    1
                  </ParaCircle>
                  <CircleName>Basic Details</CircleName>
                </Para>
                <Para>
                  <ParaCircle className="circle-around-number circle-around-number_two_padding">
                    2
                  </ParaCircle>
                  <CircleName>Image Details</CircleName>
                </Para>
                <Para>
                  <ParaCircle className="circle-around-number circle-around-number_three_padding">
                    3
                  </ParaCircle>
                  <CircleName>Videos Details</CircleName>
                </Para>
              </Navigation>
            </ContainerRow>

            <ContainerRow className="row">
              <UploadArea className="col-12">
                <ThumbNail>Add your Image</ThumbNail>
                <PortfolioImageUploader />
                <IdealSize>Ideal Size: 120 x 654</IdealSize>
              </UploadArea>
            </ContainerRow>
          </ContentContainer>

          <TopLine></TopLine>
          <ContainerBottom>
            <ContainerRow className="row">
              <div className="col-12 pr-0">
                <Button className="form-control btn btn-dark text-white float-right">
                  NEXT
                </Button>
              </div>
            </ContainerRow>
          </ContainerBottom>
        </Container>
      </Modal>
    </div>
  );
}
