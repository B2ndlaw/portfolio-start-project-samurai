import React from "react";
import styled from "styled-components";


type CardPropsType = {
   width?: string;
  height?: string;
 
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
<div className="maincontainer">

<div className="thecard">

  <div className="thefront">
  <h1>Front of Card</h1>
    <img src="https://i.ytimg.com/vi/caG12-6VM0c/maxresdefault.jpg" width={"100%"}/>
   <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

  <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
  <button>Submit</button></div>

</div>
</div>
    </StyledCard>
      
  
  );
};

const StyledCard = styled.div`
position: relative;
/* THE MAINCONTAINER HOLDS EVERYTHING */
.maincontainer{
  position: absolute;
  width: 250px;
  height: 320px;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

/* THE CARD HOLDS THE FRONT AND BACK FACES */
.thecard{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

/* THE PSUEDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT */
.thecard:active{
  transform: rotateY(180deg);
}

/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
 .thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
}

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}


/*This block (starts here) is merely styling for the flip card, and is NOT an essential part of the flip code */
.thefront h1, .theback h1{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.thefront p, .theback p{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
}



`;

