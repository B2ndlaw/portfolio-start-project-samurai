import React from "react";
import styled from "styled-components";
import iconsSprite from "../../../assets/images/icons-sprite.svg"

type SkillsIconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const SkillsIcon = (props: SkillsIconPropsType) => {
  return (
    <StyledIcon
      fill={props.fill || "black"}
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  
  
`;
