import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Sensei = () => {
  return (
   <StyledSensei>
<SectionTitle>Sensei, 先生</SectionTitle>
<FlexWrapper direction="column" align="center">
<Icon iconId="telegram"/>
<Slider/>
</FlexWrapper>
   </StyledSensei>
   
  );
};

const StyledSensei = styled.section`
  min-height: 50vh;
  background-color: #252527;
`;