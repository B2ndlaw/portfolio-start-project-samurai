import React from "react";
import styled from "styled-components";

import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";
import { SkillsIcon } from "../SkillsIcon";

type SkillPropsType = {
  src?: string;
  text?: string;
  description?: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <SkillCard>
        <FrontCard>
          <SkillCardHeader>
            <SkillName>{props.text}</SkillName>
            <div>
              {" "}
              <SkillsIcon
                iconId="sakuraIcon"
                width="25px"
                viewBox="0 0 511.999 511.999"
              ></SkillsIcon>
              <SkillsIcon
                iconId="sakuraIcon"
                width="25px"
                viewBox="0 0 511.999 511.999"
              ></SkillsIcon>{" "}
            </div>
          </SkillCardHeader>
          <ImageWrapper>
            <Image src={props.src} height={"200px"}/>
            <Button>view more</Button>
          </ImageWrapper>
          <Text>{props.description}</Text>
        </FrontCard>
        <BackCard>
        <img src="../../../../assets/images/pngwing.com-43.png"/>
        </BackCard>
      </SkillCard>
    </StyledSkill>
  );
};

export const StyledSkill = styled.div`
  flex-grow: 1;
  //border: 2px solid red;
  
  
`;

const SkillCard = styled.div`
margin: 0 auto 25px;
  width: 300px;
  max-height: 60vh;
  

  box-shadow: 0px 5px 15px 5px rgba(70, 70, 70, 0.5);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.1s linear;
 
  &:hover {
    transform: scale(1.05);
    
  }
  
  
`;

const FrontCard = styled.div`

`;

const BackCard = styled.div`


`;

const SkillCardHeader = styled.div`
  background-image: linear-gradient(
    0.25turn,
    ${theme.colors.primaryBg},
    ${theme.colors.secondaryBg}
  );
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

const SkillName = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.primaryFont};
  opacity: 0.6;
`;

const ImageWrapper = styled.div`
  position: relative;
 

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
`;

const Image = styled.img`
 
  width: 100%;
  
`;

const Text = styled.p`
  padding: 15px 15px;
`;
