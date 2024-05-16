import React from "react";


import { Link } from "../../../../components/Link";

import { Button } from "../../../../components/Button";
import { S } from "./Works_Styles";

type WorkPropsType = {
  title: string;
  description: string;
  link?: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src}/>
        <Button>view project</Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.description}</S.Text>
        <Link href={"#"}>Like</Link>
        <Link href={"#"}>Unlike</Link>
      </S.Description>
    </S.Work>
  );
};

