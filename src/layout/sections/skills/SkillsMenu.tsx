import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";


export const SkillsMenu = () => {
  return (
    <StyledSkillsMenu>
      <Container>
        <SectionTitle>
          My Skills <br />
          スキル
        </SectionTitle>

        <FlexWrapper wrap={"wrap"} justify={"space-around"}>
          <Skill
            text="Programming"
            src="https://cdnb.artstation.com/p/assets/images/images/046/171/185/large/ricardo-roduit-dojo-matrix.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."
          />
          <Skill
            text="Design"
            src="https://i.pinimg.com/originals/43/3b/42/433b423b34238af1d30627e1441fc5d7.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."
          />
          <Skill
            text="Soft Skills"
            src="https://img.freepik.com/premium-photo/chinese-tea-ceremony-chinese-style-drawing-ai-generative_686498-1748.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."
          />
        </FlexWrapper>

      
      </Container>
    </StyledSkillsMenu>
  );
};

const StyledSkillsMenu = styled.section`
  display: flex;
  //border: 1px solid green;
  ${FlexWrapper} {
    gap: 10px;
    height: 80%;
  }
`;
