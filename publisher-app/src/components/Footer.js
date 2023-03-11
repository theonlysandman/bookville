import React from "react";

import {Box, Container, Row, Column, FooterLink, Heading} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "#DE5147",
          textAlign: "center",
          // marginTop: "-50px",
          fontSize: "26px",
        }}>
        Boookville: Powered By Books and Biblionomics
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>For Publishers</Heading>
            <FooterLink href="#">Promote Your Books</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Alex Liot</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{marginLeft: "10px"}}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
