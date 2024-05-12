import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";


export const Sensei = () => {
  return (
    <StyledSensei>
      <Container>
      
        <SectionTitle>
          Sensei
          <br />
          先生
        </SectionTitle>
        
        <FlexWrapper direction="column" align="center">
         
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledSensei>
  );
};

const StyledSensei = styled.section`


`;
