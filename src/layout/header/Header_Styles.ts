import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.secondaryBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
`;

export const S = {
    Header
}