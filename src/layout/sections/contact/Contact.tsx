import React, { ElementRef, useRef } from "react";
import emailjs from '@emailjs/browser';
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

if (!form.current) return

    emailjs
      .sendForm('service_x8ip4rs', 'template_foybzrz', form.current, {
        publicKey: 'pp22bDTETdRGabh66',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    
    <S.Contact id={"contact"}>
      <Container>
      <SectionTitle>Contact<br/>お問い合わせ先</SectionTitle>

      <S.Form ref={form} onSubmit={sendEmail}>
      <S.Field required placeholder={"Name"} name={'user_name'}/>
      <S.Field required placeholder={"email"} name={'user_email'}/>
        
        <S.Field required placeholder={"Subject"} name={'subject'}/>
        <S.Field required placeholder={"Message"} as={"textarea"} name={'message'}/>
        <Button type={"submit"}>Send message</Button>
       
      </S.Form>
      </Container>
    </S.Contact>
  );
};

