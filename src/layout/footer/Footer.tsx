import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
      <FlexWrapper direction={"column"} align={"center"}>
     
      <SocialList>
        <SocialItem>
          <SocialLink href="https://facebook.com/b2ndlaw" target="blank">
            <Icon width={"40px"} height={"50px"} viewBox={"0 0 32 32"} iconId={"facebook"} />
          </SocialLink>
        </SocialItem>
      
        <SocialItem>
          <SocialLink href="https://t.me/b2ndlaw" target="blank">
            <Icon width={"40px"} height={"50px"} viewBox={"0 0 32 32"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="https://github.com/b2ndlaw" target="blank">
            <Icon width={"40px"} height={"50px"}
		      viewBox={"0 0 438.549 438.549"}
		      fill={"pink"} iconId={"github"} />
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>© 2024 Aleksey Basov, All Rights Reserved.</Copyright>
      </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`

   background-color: ${theme.colors.primaryBg};
   padding: 40px 0px;
`;



const SocialList = styled.ul`
display: flex;
gap: 30px;
list-style-type: none;
margin: 15px 0;

`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small`
  //font-size: 15px;
`;
