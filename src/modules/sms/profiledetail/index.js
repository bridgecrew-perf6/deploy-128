import React,{useState} from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import StudentProfileDetails from "./StudentProfileDetails";
import styled from "styled-components"
const ContentBox = styled(Box)`
margin: 0!important;
padding:60px 40px 60px 40px!important;
background-color:white!important;
`

export default function StudentProfileIndex() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    }
  }
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <StudentProfileDetails handlePhoneChange={handlePhoneChange} phone={phone} setPhone={setPhone}/>
      </ContentBox>
</Box>

</>
  );
}
