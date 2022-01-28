import React, { useState } from "react";
import TopSection from "../BroadbandComponents/TopSection";
import RestofContent from "../BroadbandComponents/RestofContent";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../BroadbandComponents/RestofContent/Data";
import NavBar from "../BroadbandComponents/NavBar";
import SideBar from "../BroadbandComponents/SideBar";
import Services from "../BroadbandComponents/Services";
import Footer from "../BroadbandComponents/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <TopSection />
      <RestofContent {...homeObjOne} />
      <RestofContent {...homeObjTwo} />
      <Services />
      <RestofContent {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
