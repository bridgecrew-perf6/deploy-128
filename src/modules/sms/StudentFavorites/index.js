import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components"
import FavouriteStudentComponent from './FavouriteStudentComponent';
import FavoriteList from './FavStudList';
const ContentBox = styled(Box)`
margin: 0!important;
padding:60px 105px 60px 40px!important;
background-color:white!important;
`

export default function StudentFavoritesIndex() {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
     <FavouriteStudentComponent />
     < FavoriteList />
      </ContentBox>
</Box>

</>
  );
}