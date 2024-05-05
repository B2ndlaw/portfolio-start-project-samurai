import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import photo from "../../../assets/images/contact.jpg";
export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact my assistant</SectionTitle>

      <StyledForm>
        <Field placeholder="Name"></Field>
        <Field placeholder="Subject"></Field>
        <Field placeholder="Message" as={"textarea"} />
        <Button type={"submit"}>Send message</Button>
       
      </StyledForm>
      <PhotoContact src={photo} alt="Assistant" />
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #252527;
  text-align:center;
  
`

const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`

const Field = styled.input`
`
const PhotoContact = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;