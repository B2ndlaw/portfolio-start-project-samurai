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
        <FlexWrapper wrap="wrap" justify="space-between">
          <Skill text="Programming" src="https://media.sketchfab.com/models/69ef9470852e4a0a9b0f7b7f658ef92e/thumbnails/434541c31db9434fb740f296d5121cf9/4a841686f7d545f892411630c5c96fc3.jpeg"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."/>
          <Skill text="Design" src="https://media.sketchfab.com/models/69ef9470852e4a0a9b0f7b7f658ef92e/thumbnails/434541c31db9434fb740f296d5121cf9/4a841686f7d545f892411630c5c96fc3.jpeg"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."/>
          <Skill text="Soft Skills" src="https://media.sketchfab.com/models/69ef9470852e4a0a9b0f7b7f658ef92e/thumbnails/434541c31db9434fb740f296d5121cf9/4a841686f7d545f892411630c5c96fc3.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in..."/>
        </FlexWrapper>
      </Container>
    </StyledSkillsMenu>
  );
};

const StyledSkillsMenu = styled.section`
display: flex;
justify-content: space-between;
`