import React from "react";
import { Button } from "../ButtonElement";
import {
  RestContainer,
  RestWrapper,
  RestRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./RestofContentElements";

const RestofContent = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <RestContainer lightBg={lightBg} id={id}>
        <RestWrapper>
          <RestRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topline}
                  </TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>
                  <BtnWrap>
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                  </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </RestRow>
        </RestWrapper>
      </RestContainer>
    </>
  );
};

export default RestofContent;
