import React from "react";
import { Button } from "../../../../components/Button";
import { SkillsIcon } from "../SkillsIcon";
import { S } from "../Skills_Styles";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  src?: string;
  text?: string;
  description?: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <S.SkillCard>
        <S.FrontCard>
          <S.SkillCardHeader>
            <S.SkillName>{props.text}</S.SkillName>
            <div>
              {" "}
              <SkillsIcon
                iconId="sakuraIcon"
                width="25px"
                viewBox="0 0 511.999 511.999"
              ></SkillsIcon>
              <SkillsIcon
                iconId="sakuraIcon"
                width="25px"
                viewBox="0 0 511.999 511.999"
              ></SkillsIcon>{" "}
            </div>
          </S.SkillCardHeader>
          <S.ImageWrapper>
            <S.Image src={props.src} height={"200px"} />
            <Button>view skills</Button>
          </S.ImageWrapper>
          <S.Text>{props.description}</S.Text>
        </S.FrontCard>
        <S.BackCard>
          <Icon iconId={"html"} width="50px" />
          <Icon iconId={"css"} width="50px" />
          <Icon iconId={"react"} width="50px" />
          <Icon iconId={"typescript"} width="50px" />
        </S.BackCard>
      </S.SkillCard>
    </S.Skill>
  );
};
