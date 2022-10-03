import { useState } from "react"
import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Home({choosedDeck, setChoosedDeck, numInput, setNumInput}) {
    const [enter, setEnter] = useState(false)
    const [nextHome, setNextHome] = useState(false)

    const [state, setState] = useState("")

    const drivenDeck = [
        {Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript"},
        {Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces"},
        {Q: "Componentes devem iniciar com __", R: "letra maiúscula"},
        {Q: "Podemos colocar __ dentro do JSX", R: "expressões"},
        {Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma"},
        {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
        {Q: "Usamos props para __", R: "passar diferentes informações para componentes"},
        {Q: "Usamos state (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
      const rickRollDeck = [
        {Q: "Never gonna_", R: "...give you up"},
        {Q: "Never gonna_", R: "...let you down"},
        {Q: "Never gonna_", R: "...run around and desert you"},
        {Q: "Never gonna_", R: "...make you cry"},
        {Q: "Never gonna_", R: "...say goodbye"},
        {Q: "Never gonna_", R: "...tell a lie and hurt you"},
    ]

    function editarEstado(e){
        e.preventDefault()
        if (state==="1"){
            setChoosedDeck(drivenDeck)
        } else if (state==="2"){
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
                    <select data-identifier="deck-selector" value={state} onChange={texto=> setState(texto.target.value)}>
                        <option data-identifier="deck-option" value="" hidden>Selecione seu deck</option>
                        <option data-identifier="deck-option" value="1">Driven Deck</option>
                        <option data-identifier="deck-option" value="2">Rick Roll</option>
                    </select>
                    <DeckConfirmButton state={state} type="submit" disabled={state==="" && true}>Iniciar Recall!</DeckConfirmButton>
                </form>
            )
        } else {
            return(
                <>
                    <input 
                    data-identifier="goals-input" 
                    onChange={(e)=>setNumInput(e.target.value)} 
                    type="number" min={1} max={choosedDeck.length} 
                    value={numInput} 
                    placeholder={"Digite sua meta de zaps... (1-" + choosedDeck.length+")"}>
                    </input>
                    
                    <ZapGoalButton 
                    data-identifier="start-btn" 
                    onClick={drawDeck} 
                    disabled={(numInput==="" || numInput>choosedDeck.length || numInput<1) && true} 
                    numInput={numInput} 
                    choosedDeck={choosedDeck}>
                        Iniciar Recall!
                    </ZapGoalButton>
                </>
            )
        }
    }

    return(
    <HomeContainer state={state} enter={enter} numInput={numInput}>
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
        font-weight: 400;
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
        color: ${props=> props.state==="" ? "#333333 ": "#000000"};
    }
    input{
        margin-top: 29.5px;
        width: 246px;
        height: 40px;
        background-color: ${props=>props.numInput==="" ? "#FFFFFF" : "#fff0f0"};;
        border-radius: 5px;
        border: none;
        color: ${props=>props.numInput==="" ? "#333333" : "#FB6B6B"};
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
    input::placeholder{
        font-size: 15px;
    }

`
const DeckConfirmButton = styled.button`
    width: 246px;
    height: 54px;
    border-radius: 5px;
    border: ${props=> props.state==="" ? "none" : "1px solid #D70900"};
    background-color: ${props=> props.state==="" ? "#e0e0e0" : "#FFFFFF"};
    margin-top: 18px;
    box-shadow: 0px 4px 4px #00000015;
    font-family: 'Recursive';
    color: ${props=> props.state==="" ? "#33333375" : "#D70900"};
    font-size: 18px;
    font-weight: 400;
`

const ZapGoalButton = styled.button`
    width: 246px;
    height: 54px;
    border-radius: 5px;
    border: ${props=> (props.numInput==="" || props.numInput>props.choosedDeck.length || props.numInput<1) ? "none" : "1px solid #D70900"};
    background-color: ${props=> (props.numInput==="" || props.numInput>props.choosedDeck.length || props.numInput<1) ? "#e0e0e0" : "#FFFFFF"};
    margin-top: 18px;
    box-shadow: 0px 4px 4px #00000015;
    font-family: 'Recursive';
    color: ${props=> (props.numInput==="" || props.numInput>props.choosedDeck.length || props.numInput<1) ? "#33333375" : "#D70900"};
    font-size: 18px;
    font-weight: 400; 
`