import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Commons";



export const SectionTitle = styled.h2`
${font({family: '"Josefin Sans", sans-serif', weight: 600, letterSpacing: "5px", Fmax:36, Fmin: 25})};
  text-align: center;
  position: relative;
  margin-bottom: 90px;

   /* &::before{
    content: "";
    display: inline-block;
 
    position: absolute;
	top: -70px;
    width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  border-left: 0;
  border-top: 0;
  transform: rotate(225deg);
  
 

  }  */
`
