import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { S } from "./work/Works_Styles"

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];

const workData = [
  {title: "React Samurai's way v.1.0.",
  description: "React Redux you will now super. With It-It-Kamasutra-a-a-a, React Redux you will now super. With It-It-Kamasutra-a-a-a! Dimych's song",
  src: "https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg",
  
  },
  {title: "Role Player Game",
  description: "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.",
  src: "https://i.ytimg.com/vi/ZoAIz5PSMVE/maxresdefault.jpg",

  }
]

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
      <SectionTitle>My Works<br/>作品</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper wrap="wrap" justify="space-between" align="flex-start">
        {workData.map((w, index)=>{
          return (
<Work title={w.title} key={index} description={w.description} src={w.src}/>
          )
          

        })}
        
        
      </FlexWrapper>
      </Container>
    </S.Works>
  );
};


