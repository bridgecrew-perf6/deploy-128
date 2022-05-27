import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';

import styled from "styled-components"
import LocationComponents from "./locationComponents"
const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`

const ClippedDraw = styled(ClippedDrawer)`
    display:flex;
    

    @media (max-width:768px){
      display:none;
    }


`;



export default function Location() {
  return (
<>
<Box sx={{ display: 'flex' }}>
<ClippedDraw/>
<ContentBox component="" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#fff"}}>
        <Toolbar />
      <LocationComponents />
      </ContentBox>
</Box>

</>
  );
}
{/* <Box>
<ClippedDrawer />

<Branch />
</Box> */}