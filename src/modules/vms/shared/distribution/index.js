import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
// import Distribution from "./distribution"
import DistributionNetwork from "./DistributionNetwork"
import styled from "styled-components"
import "./DistributionNetwork.css";
import "./Modal.css";
const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`





export default function ButtonAppBar() {
  return (
<>
<Box sx={{ display: 'flex', backgroundColor:'white'  }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'white' }}>
        <Toolbar />
     <DistributionNetwork />
      </ContentBox>
</Box>

</>
  );
}