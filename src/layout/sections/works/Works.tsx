import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];
export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper  justify="space-around">
        <Work
          title="Jason Momoa - 2% Irish"
          description="Lorem ipsum"
          src="https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg"
          link="#"
        />
        <Work
          title="Aquaman like Guinness"
          description="Lorem ipsum"
          src="https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg"
          link="#"
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: #252527;
  min-height: 100vh;
`;
