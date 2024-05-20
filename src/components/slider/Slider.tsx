import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider.Styles";
import './/../../styles/slider.css'
import Typewriter from "typewriter-effect";

type SlidePropsType = {
text: string,
src: string,
name: string,
prof: string,

}

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <img
        src={props.src}
        alt="photo"
        width={"200px"}
      ></img>
      <S.Name>{props.name}</S.Name>
      <S.Lesson>{props.prof}</S.Lesson>
      <S.Text>
        <Typewriter
        options={{
          strings: ["Web Developer.", "Guru HTML/CSS technologies.", "Fight style: React Styled Components" ],
          autoStart: true,
          loop: true
        }}
        />
       
        
      </S.Text>
    </S.Slide>
  );
};

const items = [
<Slide name={"Svetlana Dyablo"} 
prof={"HTML/CSS for React Dev"} 
src={"https://sun9-27.userapi.com/impg/HfzvGF-bKhvkr5YQf5j8mfSnUw14MJZJ3E6Bcg/D3qSY4NBVSQ.jpg?size=403x604&quality=96&sign=ca1c7a113b6aed42824efb1afbd30186&c_uniq_tag=PmIIH-SAU599IaOozNbQYFh15htmYRcP_TCqyiUwyWk&type=album"}  
text={"Web Developer. Guru HTML/CSS technologies. Fight style: React Styled Components"}/>, 
<Slide name={"Svetlana Dyablo"} 
prof={"HTML/CSS for React Dev"} 
src={"https://sun9-27.userapi.com/impg/HfzvGF-bKhvkr5YQf5j8mfSnUw14MJZJ3E6Bcg/D3qSY4NBVSQ.jpg?size=403x604&quality=96&sign=ca1c7a113b6aed42824efb1afbd30186&c_uniq_tag=PmIIH-SAU599IaOozNbQYFh15htmYRcP_TCqyiUwyWk&type=album"}  
text={"Web Developer. Guru HTML/CSS technologies. Fight style: React Styled Components"}/>, 
<Slide name={"Svetlana Dyablo"} 
prof={"HTML/CSS for React Dev"} 
src={"https://sun9-27.userapi.com/impg/HfzvGF-bKhvkr5YQf5j8mfSnUw14MJZJ3E6Bcg/D3qSY4NBVSQ.jpg?size=403x604&quality=96&sign=ca1c7a113b6aed42824efb1afbd30186&c_uniq_tag=PmIIH-SAU599IaOozNbQYFh15htmYRcP_TCqyiUwyWk&type=album"}  
text={"Web Developer. Guru HTML/CSS technologies. Fight style: React Styled Components"}/>];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}
      //responsive={responsive}
      //controlsStrategy="alternate"
    />
  </S.Slider>
);
