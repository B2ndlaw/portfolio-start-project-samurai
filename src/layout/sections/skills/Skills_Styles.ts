import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

//Skills
const Skills = styled.section`
  display: flex;
  //border: 1px solid green;
  ${FlexWrapper} {
    gap: 10px;
    height: 80%;
  }
`;

//Skill

export const Skill = styled.div`
  flex-grow: 1;
`;

const FrontCard = styled.div`
  //new
  /* width: 100%;
  height: 100%; */
  /* background-color: ${theme.colors.primaryBg}; */
  backface-visibility: hidden;
  transition: ${theme.animations.transition}; 
  //new
  background-image: linear-gradient(
    0.25turn,
    ${theme.colors.primaryBg},
    ${theme.colors.secondaryBg}
  );  
  box-shadow: 0px 5px 15px 5px rgba(70, 70, 70, 0.5);
  border-radius: 15px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 25px 15px rgba(70, 70, 70, 0.5); 
    ${Button} {
      display: initial;
    }
`;

const BackCard = styled.div`
  //new
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  transition: ${theme.animations.transition};
  backface-visibility: hidden;
  /* background-color: ${theme.colors.secondaryBg}; */
  background: url(http://www.psdee.com/content/images/article/20170828/21/01/37_201.jpg)
    center center no-repeat;
  transform: rotateY(180deg);

  //new

  box-shadow: 0px 5px 25px 15px rgba(70, 70, 70, 0.5);
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillCard = styled.div`
  //new
  position: relative;

  background: transparent;
  perspective: 1000px;
  //new
  margin: 0 auto 25px;
  width: 300px;
  max-height: 60vh;

  cursor: pointer;
  
  }

  &:active {
   //new
    ${FrontCard} {
      transform: rotateY(180deg);
    }
    ${BackCard} {
      transform: rotateY(360deg);
      
      
    }
    //new
  }
`;

const SkillCardHeader = styled.div`
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
  padding: 0 10px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    display: none;
    transition: ${theme.animations.transition};
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  padding: 15px 15px;
`;

export const S = {
  Skills,
  Skill,
  SkillCard,
  FrontCard,
  BackCard,
  SkillCardHeader,
  SkillName,
  ImageWrapper,
  Image,
  Text,
};
