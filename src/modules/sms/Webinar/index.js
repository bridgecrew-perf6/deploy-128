import React from "react";
import BaseComponent from "../../baseComponent";
import Webinar from "./Webinar";
import Box from "@mui/material/Box";
import ClippedDrawer from "../header";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
const ContentBox = styled(Box)`
  margin: 0 !important;
  padding: 60px 40px 60px 40px !important;
  background-color: white !important;
`;
// import Utils from "../../utility";
// heelo
class WebinarPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <ClippedDrawer />
        <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Webinar />
        </ContentBox>
      </Box>
    );
  }
}

export default WebinarPage;
