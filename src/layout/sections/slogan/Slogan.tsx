import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

import photo from "../../../assets/images/guinness_logo.png";
import { Button } from "../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <PhotoSlogan src={photo} alt="Guinness" />
      <SectionTitle>&copy; Good things come to those who wait </SectionTitle>
      
      {/*<Button>Hire me</Button>*/}
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #252527;
  text-align:center;
  
`
const PhotoSlogan = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;