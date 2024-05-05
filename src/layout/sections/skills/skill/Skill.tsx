import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


type SkillPropsType = {
    iconId: string,
    title: string,  
    text: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string

}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill}/>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
}

export const StyledSkill = styled.div`
width: 30%;
background-color: #ffffff1a;
margin: 10px;
text-align:center;

`

export const SkillTitle = styled.h3`
  color: white;
`
export const SkillText = styled.p`
  color: white;
`
