import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components"
import { useState,createContext } from 'react';
import { useHistory } from "react-router-dom";

import "./branch.css"
import BranchTableComponent from "./branchTable"

const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`








export default function BranchTable() {
  


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ClippedDrawer />
        <ContentBox component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#ffffff" }}>
          <Toolbar />

          <BranchTableComponent   />

        </ContentBox>
      </Box>

    </>
  );
}

