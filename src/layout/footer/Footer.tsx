import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const socialItemsData = [
  {
    iconID: "facebook",
    viewBox: "0 0 32 32",
    href: "https://facebook.com/b2ndlaw",
  },
  {
    iconID: "telegram",
    viewBox: "0 0 32 32",
    href: "https://t.me/b2ndlaw",
  },

  {
    iconID: "github",
    viewBox: "0 0 438.549 438.549",
    href: "https://github.com/b2ndlaw",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.SocialList>
            {socialItemsData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink href={s.href} target="blank">
                    <Icon
                      width={"40px"}
        
                      height={"50px"}
                      viewBox={s.viewBox}
                      iconId={s.iconID}
                    />
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
          <S.Copyright>© 2024 Aleksey Basov, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
