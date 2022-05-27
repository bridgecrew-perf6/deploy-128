import React from "react";
import Modal from "@mui/material/Modal";
import "./projectmodel.css";
import AddPortfolioImage from "./AddPortfolioImage";
import PortfolioBasicUploader from "./PortfolioBasicUploader";
import styled from "styled-components";

const ContentAdd = styled.div`
    background-color: white;
    padding: 15px;
    background: #f5f5f5;
    border: 1px dashed #696969;
    box-sizing: border-box;
    border-radius: 10px;
    width: 400px;
    height: 470px;
    display: flex;
    align-items: center;
    margin-right: 83px;
    position: relative;
  `;

  const Button = styled.button`
    position: absolute;
    text-decoration: none;
    background-color: none;
    background: none;
    border: none;
    font-family: inter;
    width: 400px;
    height: 470px;
   
  `;

  const AddIcon = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 2;
    top: 200px;
    left: 174px;
  `;

  const AddNewProject = styled.div`
    position: absolute;
    left: 130px;
    top: 260px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #696969;
  `;

  const ContainerAdd = styled.div`
    width: 1120px !important;
    min-height: 885px !important;
    background-color: #ffffff;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
  `;

  const ContentTop = styled.div`
    padding: 30px 55px 0 55px;
  `;

  const AddProjectHeading = styled.div`
    height: 69px;
  `;

  const AddProjectTitle = styled.div`
    padding-left: 0 !important;
    padding-right: 0 !important;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #1f1f1f;
  `;

  const ImageContainer = styled.div`
    padding-left: 0 !important;
    padding-right: 0 !important;
  `;

  const ImageCancle = styled.img`
    float: right;
  `;

  const BottomLine = styled.div`
    border-bottom: 1px solid rgba(105, 105, 105, 0.5);
    width: 100%;
  `;

  const ContentMiddle = styled.div`
    padding: 0 55px 0px 55px;
  `;

  const RowContainer = styled.div``;

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

  const Section = styled.div`
    height: 525px;
    max-width: 490px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  `;

  const ThumbNail = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #1f1f1f;
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

  const Label = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #1f1f1f;
  `;

  const Inputs = styled.input`
    border-radius: 2px;
    width:100%;
    margin-top: 5px;
    height: 50px !important;
    border: 1px solid rgba(31, 31, 31, 0.5) !important;
  `;

  const TextAreaContainer = styled.div`
    margin-top: 12px;
  `;

  const OptionLabel = styled.span`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #1f1f1f;
  `;

  const TopBottomLine = styled.div`
    border-bottom: 1px solid rgba(105, 105, 105, 0.5);
    width: 100%;
  `;

  const ButtonContainer = styled.div`
  padding: 0 55px 30px 55px;  
  `;


export default function AddPortfolioBasic() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  


  return (
    <div>
      <ContentAdd>
        <Button
          class="button_card"
          onClick={() => {
            handleOpen();
          }}
        >
          <AddIcon>
            <img src="/icons/project_add.svg" alt="image Detail" />
          </AddIcon>
          <AddNewProject>Add New File</AddNewProject>
        </Button>
      </ContentAdd>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ContainerAdd className=" border border-dark">
          <ContentTop>
            <AddProjectHeading className="row  addproject_heading">
              <AddProjectTitle className="col padding-left-right-zero add-project-title">
                Add Project
              </AddProjectTitle>
              <ImageContainer className="col ">
                <ImageCancle
                  onClick={handleClose}
                  className="card_add  "
                  src="/icons/cross_add.svg"
                  alt="cross_add"
                />
              </ImageContainer>
            </AddProjectHeading>
          </ContentTop>

          <BottomLine></BottomLine>

          <ContentMiddle>
            <RowContainer className="row">
            <Navigation >
            <Para >
              <ParaCircle className="circle-around-number circle-around-number_one_padding">
                1
              </ParaCircle>
              <CircleName>Basic Details</CircleName>
            </Para>
            <Para >
              <ParaCircle className="circle-around-number circle-around-number_two_padding">
                2
              </ParaCircle>
              <CircleName>Image Details</CircleName>
            </Para>
            <Para >
              <ParaCircle className="circle-around-number circle-around-number_three_padding">
                3
              </ParaCircle>
              <CircleName>Videos Details</CircleName>
            </Para>
          </Navigation>
            </RowContainer>

            <RowContainer className="row">
              <Section className="col ">
                <ThumbNail>Portfolio Thumbnail</ThumbNail>
                <PortfolioBasicUploader />
                <IdealSize>Ideal Size: 120 x 654</IdealSize>
              </Section>
              <Section className="col ">
                <div className="form-row">
                  <div class="form-group col-lg-12">
                    <Label className="addproject-label-name">Created By</Label>
                    <Inputs
                      type="text"
                      class="form-control"
                      placeholder="Ex. Portfolio"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div class="form-group col-lg-12">
                    <Label className="addproject-label-name">
                      Portfolio Heading
                    </Label>
                    <Inputs
                      type="text"
                      class="form-control "
                      placeholder="Interior Design Poertfolio"
                    />
                  </div>
                </div>

                <TextAreaContainer class="form-group addproject-label-name-margin-top">
                  <Label className="addproject-label-name">
                    Brief Description
                    <OptionLabel className="optional_label">
                      {" "}
                      Optional
                    </OptionLabel>
                  </Label>
                  <textarea
                    class="form-control form-control brief-discription-portfolio-field-height"
                    placeholder="#Flat No, Block, Street, Area"
                    rows="25"
                  ></textarea>
                </TextAreaContainer>
              </Section>
            </RowContainer>
          </ContentMiddle>
          <TopBottomLine className="top-bottom-line"></TopBottomLine>
          <ButtonContainer >
            <RowContainer className="row">
              <div class="col-12 pr-0">{<AddPortfolioImage />}</div>
            </RowContainer>
          </ButtonContainer>
        </ContainerAdd>
      </Modal>
    </div>
  );
}
