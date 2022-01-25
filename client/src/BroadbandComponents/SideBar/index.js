import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrap,
  SidebarRoute,
  List
} from "./SidebarElements";
const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer  isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="Packages" onClick={toggle}>Packages</SidebarLink>
          <SidebarLink to="Discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="ContactUs" onClick={toggle}>Contact Us</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/SignIn"> Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
