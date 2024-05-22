import React from "react";

import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Sensei_Styles";


export const Sensei: React.FC = () => {
  return (
    <S.Sensei id="sensei">
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
    </S.Sensei>

    
  );
};