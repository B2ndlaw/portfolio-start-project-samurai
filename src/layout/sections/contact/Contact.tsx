import React from "react";

import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
      <SectionTitle>Contact<br/>お問い合わせ先</SectionTitle>

      <S.Form>
        <S.Field placeholder="Name"></S.Field>
        <S.Field placeholder="Subject"></S.Field>
        <S.Field placeholder="Message" as={"textarea"} />
        <Button type={"submit"}>Send message</Button>
       
      </S.Form>
      </Container>
    </S.Contact>
  );
};

