import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
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

const NickName = styled.h2`
color: ${theme.colors.accent};
font-weight: 600;
font-size: 18px;

  
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.primaryFont};
    margin: 5px;
    border-radius: 50%;
    margin:20px;
    cursor: pointer;

    &:hover{
        transform: scale(1.5);

    }

    &.active{
    background-color: ${theme.colors.accent};
    transform: scale(1.5);
   
  }
  }

 
`;


export const S ={
    Slider,
    Slide,
    Text, Name,
    NickName,
    Pagination,
    

    
}