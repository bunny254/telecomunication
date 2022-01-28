import React from "react";
import Icon1 from '../../Images/cam.png'
import Icon2 from '../../Images/tv.png'
import Icon3 from '../../Images/install.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP  } from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CCTV Installation</ServicesH2>
          <ServicesP>
            We install and monitor CCTV surveillance cameras for both homes and
            offices.{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Internet Installation</ServicesH2>
          <ServicesP>
            We install internet services in areas with no WiFi Coverage.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>TV Installation</ServicesH2>
          <ServicesP>
            We mount new TV sets as well as aerial installation services.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
