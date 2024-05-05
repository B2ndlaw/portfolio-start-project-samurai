import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";


export const Main = () => {
  return (

    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi</span>
          <MainName>I'M ALEKSEY BASOV</MainName>
          <MainTitle>kōhai (後輩, "junior") {/*senpai (先輩, "senior")*/}</MainTitle>
          <Icon iconId={"sakura"} viewBox="0 0 340 340"></Icon>
      <SectionTitle><i>"A samurai has no goal, there is only a way"</i></SectionTitle>
        </div>
        <Photo src="https://www.clipartmax.com/png/full/103-1031887_the-woman-warrior-samurai-feudalism-child-soldier.png"></Photo>
       {/* <video autoplay muted loop width={"350px"} src="https://videos.ctfassets.net/8nq3bs98o7cv/gJkn3r2tfZbJuf1Iz4i9d/b1668d7ae61579dcc4465d534bd132a8/guinness_hero_small.mp4">
          </video> */}
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #252527;
  padding-top: 15vh;
`;

const MainName = styled.h2`
  color: white;
`;
const MainTitle = styled.h1`
  color: #fcc978;
`;

const Photo = styled.img`
  width: 400px;
  object-fit: cover;
`;
