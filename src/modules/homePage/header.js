import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from "../../assets/images/logo.png"

const HeadMAin = styled.div`
justify-content: space-around;
    height: 94px;
    align-items: center;
    display: flex;

`;
const HeadPartOne = styled.div`

`;
const HeadParttwo = styled.div`
display: flex;
justify-content: space-around;
display: flex;
align-items: center;
font-weight: 500;

`;
const SpanDiv = styled.span`
padding: 0 10px;
font-weight: 500;

`;
const Select = styled.select`
border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    outline: none;
    font-weight: 500;
`;
const Button1 = styled.button`
width: 127px;
height: 50px;
background: #FF7A59;
border-radius: 5px;
color:#ffffff;
border: none;
    outline: none;
    margin: 0 7px;
    font-weight: 500;
`;
const Button2 = styled.button`
width: 127px;
height: 50px;
color: #FF7A59;
border-radius: 5px;
border: none;
    outline: none;
    margin: 0 7px;
    font-weight: 500;

`;

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <HeadMAin>
    <HeadPartOne>
    <a style={{textDecoration:"none"}} href="/home"><img src={Logo}/></a>
    </HeadPartOne>
    <HeadParttwo>
        <SpanDiv ><a style={{textDecoration:"none",color:"black"}} href="/">Products</a></SpanDiv>
        <SpanDiv > <a style={{textDecoration:"none",color:"black"}}href="/">Services</a></SpanDiv>
        <SpanDiv > <a style={{textDecoration:"none",color:"black"}}href="/">Learn</a></SpanDiv>
        <SpanDiv > <a style={{textDecoration:"none",color:"black"}}href="/">Profile </a></SpanDiv>
        <SpanDiv > <a style={{textDecoration:"none",color:"black"}}href="/">Events </a></SpanDiv>
        <SpanDiv > <a style={{textDecoration:"none",color:"black"}}href="/blogs">Blogs </a></SpanDiv>
        <SpanDiv Link > <a style={{textDecoration:"none",color:"black"}} href="/job-landing-page">Jobs</a></SpanDiv>
        <Select>
            <option>Tools</option>
            <option>Tools</option>
            <option>Tools</option>
        </Select>
        {/* <Select>
            <option>Browse User Role</option>
            <option> <Link to="/bankdetails">vms</Link></option> */}
            {/* <option><a style={{textDecoration:"none"}} href="/professional-personaldetail">pms</a></option>
            <option><a style={{textDecoration:"none"}} href="/">educationist</a></option>
            <option><a style={{textDecoration:"none"}} href="/student-profile">student</a></option> */}
            {/* <option><a style={{textDecoration:"none"}} href="/">pms</a></option> */}
        {/* </Select> */}
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Browse User Role
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a style={{textDecoration:"none",color:"black"}} href="/professional-personaldetail">PMS</a></MenuItem>
        <MenuItem onClick={handleClose}><a style={{textDecoration:"none",color:"black"}} href="/">EDUCATIONIST</a></MenuItem>
        <MenuItem onClick={handleClose}><a style={{textDecoration:"none",color:"black"}} href="/student-profile">STUDENT</a></MenuItem>
        <MenuItem onClick={handleClose}><a style={{textDecoration:"none",color:"black"}} href="/bankdetails">VMS</a></MenuItem>
        {/* <MenuItem onClick={handleClose}>Student</MenuItem> */}
      </Menu>
        <Button1><a style={{textDecoration:"none",color:"black"}} href='/sign-up'>Sign Up</a></Button1>
        <Button2><a style={{textDecoration:"none",color:"black"}} href='/sign-in'>Sign In</a></Button2>

    </HeadParttwo>
    </HeadMAin>
  )
}

export default Header