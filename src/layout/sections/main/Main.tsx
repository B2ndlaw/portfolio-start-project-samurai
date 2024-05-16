import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Sakura } from "../../../components/Sakura";
import { S } from "./Main_Styles";
import { Icon } from "../../../components/icon/Icon";


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
          <Sakura />
          <S.TextBlock>
            <S.SmallText>Kon'nichiwa!</S.SmallText>
            <S.MainName>
              I'm <span>Aleksey Basov</span>
            </S.MainName>
            <S.MainTitle>
              kōhai (後輩, junior) Frontend {/*senpai (先輩, "senior")*/}
            </S.MainTitle>

            <S.Slogan>
            

              <i>"A samurai has no goal, there is only a way"</i>
              {/* <Icon iconId={"sakura"} viewBox="0 0 340 340"></Icon> */}
            </S.Slogan>
          </S.TextBlock>

          <S.HeroWrapper>
            <S.Photo src="https://www.clipartmax.com/png/full/103-1031887_the-woman-warrior-samurai-feudalism-child-soldier.png"></S.Photo>
            {/* <MainTitle>
              <p>Level 4</p>
            </MainTitle> */}
          </S.HeroWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

