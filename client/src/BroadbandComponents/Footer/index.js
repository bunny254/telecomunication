import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {
  return (
  <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us </FooterLinkTitle>
                          <FooterLink to="/signin">Get Started </FooterLink>
                          <FooterLink to="/signin">Our Clients </FooterLink>
                          <FooterLink to="/signin">Careers </FooterLink>
                          <FooterLink to="/signin">Terms of Service </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us </FooterLinkTitle>
                          <FooterLink to="/signin">Get Started </FooterLink>
                          <FooterLink to="/signin">Our Clients </FooterLink>
                          <FooterLink to="/signin">Careers </FooterLink>
                          <FooterLink to="/signin">Terms of Service </FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us </FooterLinkTitle>
                          <FooterLink to="/signin">Get Started </FooterLink>
                          <FooterLink to="/signin">Our Clients </FooterLink>
                          <FooterLink to="/signin">Careers </FooterLink>
                          <FooterLink to="/signin">Terms of Service </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us </FooterLinkTitle>
                          <FooterLink to="/signin">Get Started </FooterLink>
                          <FooterLink to="/signin">Our Clients </FooterLink>
                          <FooterLink to="/signin">Careers </FooterLink>
                          <FooterLink to="/signin">Terms of Service </FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
      </FooterWrap>
</FooterContainer>
 );
};

export default Footer;
