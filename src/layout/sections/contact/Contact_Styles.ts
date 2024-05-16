import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contact = styled.section`
 background: url(https://cs13.pikabu.ru/post_img/2020/09/15/10/og_og_1600186555243144696.jpg) center center no-repeat;
 //background-image: url(https://catherineasquithgallery.com/uploads/posts/2023-01/1674531969_catherineasquithgallery-com-p-sakura-na-korichnevom-fone-165.jpg);
 //background-image: url(https://catherineasquithgallery.com/uploads/posts/2021-02/1614289817_43-p-chernii-yaponskii-fon-57.jpg);

 background-size: auto 100%;

 Button{

  margin: 0 auto;
  }
  
`

const Form = styled.form`
max-width: 540px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
margin: 0 auto;
textarea {
  resize: none;
  height: 155px;

}
`

const Field = styled.input`
width: 100%;
background-color: ${theme.colors.primaryFont};
border: 1px solid ${theme.colors.accent};
border-radius: 5px;
padding: 7px 15px;
font-family: "Poppins", sans-serif;
color: black;
font-weight: 400;
letter-spacing: 0.05em;

&::placeholder{
  color: ${theme.colors.accent};
  text-transform: capitalize;
}

&:focus-visible {
  outline: none;
  box-shadow: 0px 5px 15px 5px rgba(70, 70, 70, 0.5);
}

&:nth-child(3){margin-bottom: 10px;}
`
export const S = {
    Contact,
    Form,
    Field,

}