import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;

  img{
    border-radius: 5px;
  }
`;

const Text = styled.p`
  margin: 20px;

`;

const Name = styled.h3`
font-size: 30px;
padding: 10px;
`;

const Lesson = styled.h2`
color: ${theme.colors.accent};
font-weight: 600;
font-size: 18px;

  
`





export const S ={
    Slider,
    Slide,
    Text, Name,
    Lesson,
 
    

    
}