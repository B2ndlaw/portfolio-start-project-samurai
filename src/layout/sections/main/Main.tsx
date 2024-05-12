import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Sakura } from "../../../components/Sakura";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
        <Sakura/>
          <div>
            <SmallText>Kon'nichiwa!</SmallText>
            <MainName>
              I'm <span>Aleksey Basov</span>
            </MainName>
            <MainTitle>
              kōhai (後輩, junior) {/*senpai (先輩, "senior")*/}
            </MainTitle>

            <Slogan>
              {/* <Icon iconId={"sakura"} viewBox="0 0 340 340"></Icon> */}
              <SectionTitle>
                
                  <i>"A samurai has no goal, there is only a way"</i>
                
              </SectionTitle>
            </Slogan>
          </div>

          <HeroWrapper>
            <Photo src="https://www.clipartmax.com/png/full/103-1031887_the-woman-warrior-samurai-feudalism-child-soldier.png"></Photo>
            <MainTitle>
              <p>Level 1</p>
            </MainTitle>
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
  

`;

const SmallText = styled.span`
  font-size: 25px;
  font-weight: 800;
  color: ${theme.colors.accent};
  font-family: "Josefin Sans";
`;

const MainName = styled.h2`
  color: white;
  font-family: "Josefin Sans";
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;
  font-weight: 800;

  span {
    position: relative;
    z-index: 0;
    transition: transform 4s;

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
`;
const MainTitle = styled.h1`

  


`;

const Photo = styled.img`
  width: 400px;
  object-fit: cover;
`;

const Slogan = styled.div`
  padding-top: 100px;
  
  display: inline-block;
  text-align: center;

  
    opacity: 0;
    animation: ani 10s forwards;
  
  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p{
    font-size: 32px;
  }
`;

const HeroWrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 0;

  p{
    font-size: 25px;
  }

  p::after {
    content: "";
    width: 120px;
    height: 25px;
    position: absolute;
    right: 20px;
    bottom: 3px;
    background-image: linear-gradient(0.25turn, red 10%  30%, #ffd829 45%);
    outline: 4px solid black;
  }



  /*&::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.secondaryFont};
    position: absolute;
    top: -20px;
    left: 54px;
    z-index: -1;
  } */
`;
