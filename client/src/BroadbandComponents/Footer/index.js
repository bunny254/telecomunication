import React from "react";
import {FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from "./FooterElements";

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
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Kim</SocialLogo>
            <WebsiteRights>
              Made With ❤️ By Simon Wachira © {new Date().getFullYear()}{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
