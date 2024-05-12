import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import { Link } from "../Link";
import { theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper direction="column" align="center">
        <Slide>
          <img
            src="https://i.pinimg.com/736x/fa/8b/a4/fa8ba4cbad8efb654610b5ec1348c0aa.jpg"
            alt="photo" width={"200px"}
          ></img>
          <Name>Svetlana Dyablo</Name>
          <NickName>HTML/CSS for React Dev</NickName>
          <Text>
            Web Developer. Guru HTML/CSS technologies. <br/>Fight style: React Styled Components
          </Text>
         

          
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p`
  margin: 20px;

`;

const Name = styled.h3`
font-size: 30px;
padding: 10px;
`;

const NickName = styled.h2`
color: #fcc978;
font-weight: 400;
font-size: 18px;

  
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.primaryFont};
    margin: 5px;
    border-radius: 50%;
    margin:20px;
    cursor: pointer;

    &.active{
    background-color: ${theme.colors.accent};
    transform: scale(1.5);
   
  }
  }

 
`;
