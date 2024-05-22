import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll} from "react-scroll";
import { useEffect } from "react";
import {useState} from "react";


export const GoTopBtn = () => {

const [showBtn, setShowBtn] = useState(false)

useEffect( ()=>{
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
        setShowBtn(true)
    } else {
        setShowBtn(false)
    }
})
},[])

return (

    <>

    {showBtn && (   <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
<Icon iconId="arrow"  viewBox="-3 0 32 32"/>
    </StyledGoTopBtn>)}
 
    </>

)

}

const StyledGoTopBtn = styled.button`
background-color: transparent;

position: fixed;
right: 20px;
bottom: 20px;
    
`