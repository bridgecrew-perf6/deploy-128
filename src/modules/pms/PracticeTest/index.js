import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../../vms/shared/header"
import Toolbar from '@mui/material/Toolbar';

import styled from "styled-components"
import PracticeComponent from './practiceComp';
// import QuizeForm from './practiceForm';

const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`
export default function PracticeTest() {
  return (
    <Box sx={{ display: 'flex', backgroundColor:'white'  }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3, pt:3, backgroundColor:'white' }}>
        <Toolbar />
     {/* <Distribution /> */}
     <PracticeComponent />
     {/* <QuizeForm /> */}
      </ContentBox>
</Box>
  )
}
