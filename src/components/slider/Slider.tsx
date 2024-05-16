import React from "react";

import { FlexWrapper } from "../FlexWrapper";
import { S } from "./Slider.Styles";


export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexWrapper direction="column" align="center">
        <S.Slide>
          <img
            src="https://sun9-27.userapi.com/impg/HfzvGF-bKhvkr5YQf5j8mfSnUw14MJZJ3E6Bcg/D3qSY4NBVSQ.jpg?size=403x604&quality=96&sign=ca1c7a113b6aed42824efb1afbd30186&c_uniq_tag=PmIIH-SAU599IaOozNbQYFh15htmYRcP_TCqyiUwyWk&type=album"
            alt="photo" width={"200px"}
          ></img>
          <S.Name>Svetlana Dyablo</S.Name>
          <S.NickName>HTML/CSS for React Dev</S.NickName>
          <S.Text>
            Web Developer. Guru HTML/CSS technologies. <br/>Fight style: React Styled Components
          </S.Text>
         

          
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  );
};

