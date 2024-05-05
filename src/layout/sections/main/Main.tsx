import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi</span>
          <MainName>I'm Jason Momoa</MainName>
          <MainTitle>Aquaman & Guinness enthusiast</MainTitle>
        </div>
        <Photo src={photo} alt="" />
       {/* <video autoplay muted loop width={"350px"} src="https://videos.ctfassets.net/8nq3bs98o7cv/gJkn3r2tfZbJuf1Iz4i9d/b1668d7ae61579dcc4465d534bd132a8/guinness_hero_small.mp4">
          </video> */}
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #252527;
`;

const MainName = styled.h2`
  color: white;
`;
const MainTitle = styled.h1`
  color: #fcc978;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
