import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";


export const Slider = () => {
  return (
   <StyledSlider>
    <FlexWrapper>
<Slide>
<Text>
Lorem ipsum
</Text>

<Name>
  Jack Black  
</Name>
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
