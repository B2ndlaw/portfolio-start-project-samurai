import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Sensei", "Contact"]

export const Header = () => {
  return (
    <SlyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </SlyledHeader>
  );
};


const SlyledHeader = styled.header`
  background-color: #ffc0cb63;
  display: flex;
  justify-content:space-between;
  align-items: center;
  position: fixed;
  width: 100%;
 
  font-size: 23px;
  padding: 5px 100px;
  box-sizing: border-box;
`;
