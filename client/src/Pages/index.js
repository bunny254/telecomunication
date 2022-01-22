import React, { useState } from "react";
import NavBar from "../BroadbandComponents/NavBar";
import SideBar from "../BroadbandComponents/SideBar";
import TopSection from "../BroadbandComponents/TopSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <TopSection/>
    </>
  );
};

export default Home;
