import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap="wrap" justify="space-between">
        <Skill
          iconId="aquaman"
          width="50px"
          height="50px"
          fill="white"
          viewBox="0 0 512 512"
          title="Aquaman"
          text="Conquering the seven seas"
        />
        <Skill
          iconId="beer"
          height="50px"
          width="50px"
          viewBox="0 0 512 512"
          title="Beer"
          text="Guinness enthusiast"
        />
        <Skill
          iconId="axe"
          width="50px"
          height="50px"
          fill="white"
          viewBox="0 0 512 512"
          title="Axe throwing"
          text="Drop axe"
        />
        <Skill
          iconId="khalisi"
          width="50px"
          height="50px"
          fill="white"
          viewBox="0 0 24 24"
          title="Khalisi husband"
          text="Wuf"
        />
        <Skill iconId="bouldering" width="50px"
  height="50px"
  viewBox="0 0 24 24" title="Bouldering" text="Guinness's ambassador" />
        <Skill iconId="gym" viewBox="0 0 70.529 70.529" title="Gym" text="Drop axe" />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #252527;
  min-height: 100vh;
`;
