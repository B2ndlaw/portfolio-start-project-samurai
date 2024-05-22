import React, { useState } from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { S } from "./work/Works_Styles";

const tabsItems: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  { title: "all", status: "all" },

  { title: "landing page", status: "landing" },
  { title: "react", status: "react" },
  { title: "spa", status: "spa" },
];

const worksData = [
  {
    title: "React Samurai's way v.1.0.",
    description:
      "React Redux you will now super. With It-It-Kamasutra-a-a-a, React Redux you will now super. With It-It-Kamasutra-a-a-a! Dimych's song",
    src: "https://proprikol.ru/wp-content/uploads/2020/12/salyut-krasivye-kartinki-18-1.jpg",
    type: "spa",
  },
  {
    title: "Role Player Game",
    description:
      "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.",
    src: "https://i.ytimg.com/vi/ZoAIz5PSMVE/maxresdefault.jpg",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");

  let filteredWorks = worksData

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id="works">
      <Container>
        <SectionTitle>
          My Works
          <br />
          作品
        </SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper wrap="wrap" justify="space-between" align="flex-start">
          {worksData.map((w, index) => {
            return (
              <Work
                title={w.title}
                key={index}
                description={w.description}
                src={w.src}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
