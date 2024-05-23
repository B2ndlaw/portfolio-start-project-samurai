import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
 
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;
  
  




  &:hover {
    &::before {
      height: 100%;
      width: 100%;
      z-index: -1;
      border-radius: 5px;
      
    }
  }

  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: -1;
    transition: ${theme.animations.transition};
    
    

  }
`;
