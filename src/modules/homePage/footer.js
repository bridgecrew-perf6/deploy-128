import React from "react";
import styled from 'styled-components';
  


const Box = styled.div`
  padding: 80px 60px;
  background: black;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: initial;
    // max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
const EmailNewsletter = styled.input`
width: 415px;
height: 50px;
left: 1405px;
top: 8105px;

background: #353535;
border-radius: 10px;
 ::placeholder{
  width: 204px;
  height: 24px;
  left: 1430px;
  top: 8118px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  
  color: #696969;
 }`
 const Icon= styled.img`

height: 20px;
width: 20px;

border-radius: 0px;
margin-left: 379px;
margin-top: -34px;

// border: 2px solid #FFFFFF;`

const ColumnAddress = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 900px;

`

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>ORGANISATION</Heading>
            <FooterLink href="#">About US</FooterLink>
            <FooterLink href="#">Our team</FooterLink>
            <FooterLink href="#">Join us</FooterLink>
          </Column>
          <Column>
            <Heading>ASSISTANCE</Heading>
            <FooterLink href="#">Get Featured</FooterLink>
            <FooterLink href="#">Subscription Plans</FooterLink>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Report Inquiry</FooterLink>
          </Column>
          <Column>
            <Heading>LEGAL</Heading>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Shipping Policy</FooterLink>
            <FooterLink href="#">Copyright</FooterLink>

          </Column>
          <Column>
            <Heading>Social</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
           <Heading>SIGN UP FOR OUR WEEKLY NEWSLETTER</Heading>
           <EmailNewsletter type= "email"  placeholder="fullname@gmail.com" />
           <Icon src="/icons/Vector.png"></Icon>
          </Column>
        </Row>
      
        <ColumnAddress>
         <Heading>CONTACT</Heading>
            <FooterLink href="#">
              <i className="">
                <span style={{ marginLeft: "10px" }}>
                91 99999 99999
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i className="">
              <span style={{ marginLeft: "10px" }}>
              materiallibrary@gmail.com
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
          <i className="">
            <span style={{ marginLeft: "10px" }}>
            4th Floor, Sector 56, Metro World Mall, Gurugram, Haryana, 122011
            </span>
          </i>
        </FooterLink>
        </ColumnAddress>
      </Container>
    </Box>
  );
};
export default Footer;