import React from 'react';
import { useState } from 'react';
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElement';
import { TopContainer, TopBackground, VideoBackground, TopContent, TopH1, TopP, TopBtnWrapper, ArrowForward, ArrowRight } from './TopElements';

const TopSection=() =>{
    const [hover,setHover]=useState(false);

    const onHover=()=>{
        setHover(!hover);
    };


  return (
      <TopContainer id="home">
          <TopBackground>
              <VideoBackground autoPlay loop muted src={Video} type='video/mp4'></VideoBackground>
          </TopBackground>
          <TopContent>
              <TopH1>Internet Access Made Instant</TopH1>
              <TopP>
                  Get connected to the internet now.
              </TopP>
              <TopBtnWrapper>
                  <Button to ="Signin" onMouseEnter={onHover} onMouseLeave={onHover} >  
                      Simple steps to start{hover ? <ArrowForward/>:<ArrowRight/>}
                  </Button>
              </TopBtnWrapper>
          </TopContent>

      </TopContainer>
   ) 
};


export default TopSection;
