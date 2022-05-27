import React from "react";
import BaseComponent from "../../baseComponent";
import MyJobs from "./StudentsJobs"
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components"
const ContentBox = styled(Box)`
margin: 0!important;
padding:60px 40px 60px 40px!important;
background-color:white!important;
`
// import Utils from "../../utility";
// heelo 
class StudentJob extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <Box sx={{ display: 'flex' }}>
        <ClippedDrawer />
    <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
         <MyJobs />
          </ContentBox>
    </Box>
    
    );
  }
}

export default StudentJob;
