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
            src="https://sun9-27.userapi.com/impg/HfzvGF-bKhvkr5YQf5j8mfSnUw14MJZJ3E6Bcg/D3qSY4NBVSQ.jpg?size=403x604&quality=96&sign=ca1c7a113b6aed42824efb1afbd30186&c_uniq_tag=PmIIH-SAU599IaOozNbQYFh15htmYRcP_TCqyiUwyWk&type=album"
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

  img{
    border-radius: 5px;
  }
`;

const Text = styled.p`
  margin: 20px;

`;

const Name = styled.h3`
font-size: 30px;
padding: 10px;
`;

const NickName = styled.h2`
color: ${theme.colors.accent};
font-weight: 600;
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
