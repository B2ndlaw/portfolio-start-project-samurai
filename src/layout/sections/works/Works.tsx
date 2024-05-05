import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";

const worksItems = ["Aquaman", "Guinness", "Jason Momoa", "Sport"];
export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper  justify="space-around">
        <Work
          title="Jason Momoa - 2% Irish"
          description="Lorem ipsum"
          src="https://www.youtube.com/embed/Xt05ZN-C26k?si=Dhx4wjT7o-SCi8I0"
          link="#"
        />
        <Work
          title="Aquaman like Guinness"
          description="Lorem ipsum"
          src="https://www.youtube.com/embed/ZmH5bDMyqjE?si=4d1p-CVGlkGRKZ09&amp;start=3"
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
