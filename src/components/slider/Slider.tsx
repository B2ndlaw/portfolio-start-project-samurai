import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";


export const Slider = () => {
  return (
   <StyledSlider>
    <FlexWrapper>
<Slide>
  <img src="https://i.pinimg.com/736x/fa/8b/a4/fa8ba4cbad8efb654610b5ec1348c0aa.jpg" width={"100px"}></img>
<Name>
  Svetlana Dyablo 
</Name>
<Text>
Guru HTML CSS technologies. Fight style - Styled Components
</Text>


</Slide>
</FlexWrapper>
<Pagination>
    <span></span>
    <span></span>
    <span></span>
</Pagination>


   </StyledSlider>
   
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
  color: white;
`

const Name = styled.span`
  color: white;
`

const Pagination = styled.div`
  span{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: white;
    margin: 5px;
    border-radius: 50%;

  }
`
