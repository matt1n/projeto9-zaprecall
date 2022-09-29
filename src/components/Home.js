import { useState } from "react"
import styled from "styled-components"

export default function Home({logo}) {
    
    const [enter, setEnter] = useState(false)

    return(
    <HomeContainer enter={enter}>
        <img src={logo} alt="Logo"/>
        <p>ZapRecall</p>
        <button onClick={()=>setEnter(true)}>Iniciar Recall!</button>
    </HomeContainer>    
    )
};

const HomeContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: #FB6B6B;
    display: ${props=> props.enter===true ? "none" : ""};
    p{
        margin-top: 21.5px;
        font-size: 36px;
        font-weight: 700;
        font-family: 'Righteous';
        color: #FFFFFF;
    }
    button{
        width: 246px;
        height: 54px;
        border-radius: 5px;
        border: 1px solid #D70900;
        background-color: #FFFFFF;
        margin-top: 38.5px;
        box-shadow: 0px 4px 4px #00000015;
        font-family: 'Recursive';
        color: #D70900;
        font-size: 18px;
        font-weight: 400;
    }
`