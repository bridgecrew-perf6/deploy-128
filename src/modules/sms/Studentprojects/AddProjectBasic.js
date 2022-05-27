import React from "react";
import Modal from "@mui/material/Modal";
import "./projectmodel.css";
import AddProjectImage from "./AddProjectImage";
import ProjectBasicUploader from "./ProjectBasicUploader";
import styled from "styled-components";

const ConatinerContent = styled.div`
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

const Button = styled.div`
  text-decoration: none;
  background-color: none;
  background: none;
  border: none;
  font-family: inter;
  width: 400px;
  height: 470px;
`;

const ProjectAdd = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  z-index: 2;
  top: 200px;
  left: 174px;
`;

const AddNewFile = styled.div`
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

const Container = styled.div`
  width: 1120px !important;
  min-height: 885px !important;
  background-color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
`;

const Image = styled.img``;

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

const Uploadarea = styled.div`
  height: 525px;
  max-width: 490px !important;
`;

const Thumbnail = styled.div`
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

const FormArea = styled.div`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;

const Input = styled.input`
  width: 100%;
  height: 50px !important;
  border: 1px solid rgba(31, 31, 31, 0.5) !important;
`;

const InputContainer = styled.div`
  margin-top: 12px;
`;

const Select = styled.select`
  max-height: 50px !important;
  border: 1px solid rgba(31, 31, 31, 0.5) !important;
  padding: 0px !important;
`;

const Option = styled.div``;

const TextInput = styled.input`
  min-width: 600px;
  min-height: 100px;
  border: 1px solid rgba(31, 31, 31, 0.5) !important;
`;

const ButtonContainer = styled.div`\
padding: 0 55px 30px 55px;


`;

export default function AddProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ConatinerContent>
        <Button
          onClick={() => {
            handleOpen();
          }}
        >
          <ProjectAdd>
            <Image src="/icons/project_add.svg" alt="image Detail" />
          </ProjectAdd>
          <AddNewFile className="add_new_project">Add New File</AddNewFile>
        </Button>
      </ConatinerContent>
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
              <Uploadarea className="col  addproject-upload-area padding-left-right-zero">
                <Thumbnail className="thumbnail">Upload Thumbnail</Thumbnail>
                <ProjectBasicUploader />
                <IdealSize>Ideal Size: 120 x 654</IdealSize>
              </Uploadarea>

              <FormArea className="col  addproject_form_area padding-left-right-zero">
                <div className="form-row">
                  <div class="form-group col-lg-12">
                    <Label>Project Title*</Label>
                    <Input
                      type="text"
                      class="form-control"
                      placeholder="Ex. Portfolio"
                    />
                  </div>
                </div>

                <InputContainer class="form-row addproject-label-name-margin-top">
                  <div class="form-group col-lg-12 p-0">
                    <Label className="addproject-label-name">
                      Residential*
                    </Label>
                    <Select id="inputState" className="form-control ">
                      <Option selected>Residential</Option>
                      <Option>custom</Option>
                    </Select>
                  </div>
                </InputContainer>

                <InputContainer className="form-row  ">
                  <div class="form-group col-lg-6 ">
                    <Label className="addproject-label-name">Start Date*</Label>
                    <Input type="date" class="form-control " />
                  </div>
                  <div className="form-group col-lg-6">
                    <label className="addproject-label-name">End Date*</label>
                    <Input type="date" className="form-control " />
                  </div>
                </InputContainer>

                <InputContainer className="form-row ">
                  <div className="col-lg-12 mb-3">
                    <Label className="addproject-label-name">
                      Area Covered
                    </Label>
                    <div className="input-group">
                      <Input
                        type="text"
                        className="form-control addproject-field-height"
                        placeholder="2000"
                        required
                      />
                      <div className="input-group-prepend">
                        <Input
                          type="text"
                          className="addproject_square"
                          placeholder="Sq."
                        />
                      </div>
                    </div>
                  </div>
                </InputContainer>

                <div class="form-group addproject-label-name-margin-top">
                  <label for="inputAddress2" className="addproject-label-name">
                    Brief Description*
                  </label>
                  <TextInput
                    type="text"
                    className="form-control brief-discription-field-height"
                    placeholder="#Flat No, Block, Street, Area"
                  />
                </div>
              </FormArea>
            </ContainerRow>
          </ContentContainer>
          <TopLine></TopLine>
          <ButtonContainer className="container_add_content_bottom">
            <ContainerRow className="row">
              <div class="col-12 pr-0">{<AddProjectImage />}</div>
            </ContainerRow>
          </ButtonContainer>
        </Container>
      </Modal>
    </div>
  );
}
