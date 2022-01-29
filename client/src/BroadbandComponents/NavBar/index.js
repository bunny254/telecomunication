import React, {useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
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

const NavBar = ({toggle}) => {
  const [scrollNav, setScrollNav]=useState(false)
  const changeNav= ()=>{
    if(window.scrollY>=80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  } 
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    }, []);

  const toggleHome=()=>{
    scroll.scrollToTop();
  };



  return (
    <>
    <IconContext.Provider value={ {color:'#fff'} }>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Broadband</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="Home"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Home</NavLinks>
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
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
