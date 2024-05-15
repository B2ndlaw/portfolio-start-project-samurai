import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Sakura } from "../../../components/Sakura";
import { font } from "../../../styles/Commons";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
          <Sakura />
          <TextBlock>
            <SmallText>Kon'nichiwa!</SmallText>
            <MainName>
              I'm <span>Aleksey Basov</span>
            </MainName>
            <MainTitle>
              kōhai (後輩, junior) Frontend {/*senpai (先輩, "senior")*/}
            </MainTitle>

            <Slogan>
              {/* <Icon iconId={"sakura"} viewBox="0 0 340 340"></Icon> */}

              <i>"A samurai has no goal, there is only a way"</i>
            </Slogan>
          </TextBlock>

          <HeroWrapper>
            <Photo src="https://www.clipartmax.com/png/full/103-1031887_the-woman-warrior-samurai-feudalism-child-soldier.png"></Photo>
            {/* <MainTitle>
              <p>Level 4</p>
            </MainTitle> */}
          </HeroWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  text-align: center;
  @media ${theme.media.mobile} {
    padding-top: 15vh;
  }
  @media ${theme.media.tablet} {
    padding-top: 15vh;
  }
`;

const TextBlock = styled.div`
  width: 50%;
`;

const SmallText = styled.span`

  ${font({ weight: 600, Fmax: 25, Fmin: 16 })};
  opacity: 0.6;

 
`;

const MainName = styled.h2`
  ${font({ family: "Josefin Sans", weight: 800, Fmax: 50, Fmin: 36 })};

  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    transition: transform 4s;
    white-space: nowrap;

    @media ${theme.media.mobile} {
      white-space: wrap;
    }

    &:hover {
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 10px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 0px;
        left: 5px;
        z-index: -1;
      }
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;
const MainTitle = styled.h1`
  ${font({
    weight: 600,
    Fmax: 25,
    Fmin: 16,
  })};
  color: ${theme.colors.accent};
`;

const Photo = styled.img`
  width: 400px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
  }
`;

const Slogan = styled.div`
  width: 100%;
  padding-top: 5vh;

  display: inline-block;
  text-align: center;

  opacity: 0;
  animation: ani 10s forwards;

  ${font({ family: "Josefin Sans", weight: 400, Fmax: 36, Fmin: 25 })};

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HeroWrapper = styled.div`

  position: relative;
  
 

  p {
    font-size: 25px;
    font-weight: 600;
  }

  p::after {
    content: "";
    width: 120px;
    height: 20px;
    position: absolute;
    right: 20px;
    bottom: 7px;
    background-image: linear-gradient(0.25turn, #173017 10% 30%, #ffd829 45%);
    outline: 3px solid black;
    @media ${theme.media.mobile} {
      width: 80px;
    }
  }
`;
