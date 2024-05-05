import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <SlyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </SlyledHeader>
  );
};


const SlyledHeader = styled.header`
  background-color: #252527b7;
  display: flex;
  justify-content:space-between;
  position: fixed;
  width: 100%;
`;
