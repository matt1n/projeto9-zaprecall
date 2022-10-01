import { useState } from "react"
import styled from "styled-components"

export default function Home({logo, drivenDeck, rickRollDeck, choosedDeck, setChoosedDeck, numInput, setNumInput}) {
    
    const [enter, setEnter] = useState(false)
    const [nextHome, setNextHome] = useState(false)

    const [estado, setEstado] = useState("")

    function editarEstado(e){
        e.preventDefault()
        if (estado==="1"){
            setChoosedDeck(drivenDeck)
        } else if (estado==="2"){
            setChoosedDeck(rickRollDeck)
        }
        setNextHome(true)
    }

    function drawDeck(){
        setEnter(true)
    }

    function homeMenu(){
        if (nextHome===false){
            return(
                <form onSubmit={editarEstado}>
                    <select value={estado} onChange={texto=> setEstado(texto.target.value)}>
                        <option value="">Selecione seu deck</option>
                        <option value="1">Driven Deck</option>
                        <option value="2">Rick Roll</option>
                    </select>
                    <button type="submit" disabled={estado==="" && true}>Iniciar Recall!</button>
                </form>
            )
        } else {
            return(
                <>
                    <input onChange={(e)=>setNumInput(e.target.value)} type="number" min={1} max={choosedDeck.length} value={1} placeholder={"Digite sua meta de zaps... (1-" + choosedDeck.length+")"}></input>
                    <button onClick={drawDeck}>Iniciar Recall!</button>
                </>
            )
        }
    }

    return(
    <HomeContainer estado={estado} enter={enter}>
        <img src={logo} alt="Logo"/>
        <p>ZapRecall</p>
        {homeMenu()}    
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
    form{
        display: flex;
        flex-direction: column;
    }
    select{
        margin-top: 29.5px;
        height: 40px;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: none;
        color: #333333;
    }
    input{
        margin-top: 29.5px;
        width: 246px;
        height: 40px;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: none;
        color: #333333;
        text-align: center;
        font-size: 15px;
    }
    input::placeholder{
        font-size: 15px;
    }
    button{
        width: 246px;
        height: 54px;
        border-radius: 5px;
        border: ${props=> props.estado==="" ? "none" : "1px solid #D70900"};
        background-color: ${props=> props.estado==="" ? "#e0e0e0" : "#FFFFFF"};
        margin-top: 18px;
        box-shadow: 0px 4px 4px #00000015;
        font-family: 'Recursive';
        color: ${props=> props.estado==="" ? "#33333375" : "#D70900"};
        font-size: 18px;
        font-weight: 400;
    }
`