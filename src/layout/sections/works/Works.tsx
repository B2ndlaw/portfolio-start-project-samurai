import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];
export const Works = () => {
  return (
    <StyledWorks>
      <Container>
      <SectionTitle>My Works<br/>作品</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper  justify="space-between" align="flex-start">
        <Work
          title="First Work"
          description="Lorem ipsum"
          src="https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg"
          link="#"
        />
        <Work
          title="Second Work"
          description="Lorem ipsum"
          src="https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg"
          link="#"
        />
      </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
 

`;
