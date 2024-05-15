import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { KatanaButton } from "../../components/KatanaButton";
import { MobileHeaderMenu } from "./mobileHeaderMenu/MobileHeaderMenu";

const items = ["Home", "My Skills", "My Works", "Sensei", "Contact"];

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <KatanaButton/>
          <MobileHeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
`;
