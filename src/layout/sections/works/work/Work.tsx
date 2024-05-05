import React from "react";
import styled from "styled-components";


type WorkPropsType = {
  title: string;
  description: string;
  link: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <StyledIframe src={props.src}></StyledIframe>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Link href="#">Like</Link>
      <Link href="#">Unlike</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #ffffff1a;
  max-width: 540px;
  width: 100%;
 
`;
const StyledIframe = styled.iframe`
width: 100%;
height: 250px;
object-fit:cover;
border: none;

  
`;
const Title = styled.h3`
  color: white;
`;
const Description = styled.p`
  color: white;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;
`;
