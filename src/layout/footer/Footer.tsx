import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
      <Name>@b2ndlaw</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>© 2024 Design by Aleksey Basov, All Rights Reserved</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #252527;
`;

const Name = styled.span`
  color: white;
`;

const SocialList = styled.ul`
display: flex;
gap: 30px;
list-style-type: none;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small`
  color: white;
`;
