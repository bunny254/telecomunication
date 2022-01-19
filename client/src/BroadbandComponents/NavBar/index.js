import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Broadband</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="Home">Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Packages">Packages</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Discovey">Discover</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="ContactUs">Contact Us</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="SignIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
