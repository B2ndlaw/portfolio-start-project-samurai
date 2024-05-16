import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

//Menu
const Link = styled.a`
  //font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-align: center;

  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.primaryFont};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;
const MenuItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(15deg) translateX(5px);
      //color: ${theme.colors.secondaryFont};

      & + ${Mask} {
        transform: skewX(15deg) translateX(-5px);
      }
    }
  }
`;
// MobileMenu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.colors.primaryBg};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -117px;
  right: -90px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    left: 45px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);
      left: 0px;
    
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);
      left: 0px;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
//DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

export const S = {
  Link,
  MenuItem,
  Mask,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
};
