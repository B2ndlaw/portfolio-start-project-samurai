import React from "react";
import styled from 'styled-components';
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
<a href="">
        <Icon iconId={'guinness_logo'} fill={"none"} width="100px" height={"100%"} viewBox={"0 0 85 72"}/>
        <Icon iconId={'plus'} fill={"white"} width="50px" height={"60px"} viewBox={"-5 0 35 35"}/>
        <Icon iconId={'trident'} fill={"#fcc978"} width="80px" height={"100%"} viewBox={"0 0 460 460"}/>
</a>
  )
};