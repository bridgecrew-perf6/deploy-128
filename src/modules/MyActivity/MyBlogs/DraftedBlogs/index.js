import * as React from "react";
import Box from "@mui/material/Box";
import ClippedDrawer from "../../../pms/header";
import Toolbar from "@mui/material/Toolbar";

import styled from "styled-components";
import DraftedBlogs from "./DraftedBlogs";
const ContentBox = styled(Box)`
  margin: 0 !important;
  padding: 60px 40px 60px 40px !important;
  background-color: white !important;
`;

export default function DraftedBlogIndex() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ClippedDrawer />
        <ContentBox component="" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <DraftedBlogs />
        </ContentBox>
      </Box>
    </>
  );
}

