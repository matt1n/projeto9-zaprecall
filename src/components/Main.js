import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Home from "./Home";


export function Main({logo, play, virar, certo, quase, erro}) {
  const [cardSwitched, setCardSwitched] = useState([])

  const [answeredCards, setAnsweredCards] = useState([])
  const [zapCards, setZapCards] = useState([])
  const [almoustCards, setAlmoustCards] = useState([])
  const [forgotCards, setForgotCards] = useState([])
  const [answeredCardsIcons, setAnsweredCardsIcons] = useState([])
  const drivenDeck = [
    {Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript"},
    {Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces"},
    {Q: "Componentes devem iniciar com __", R: "letra maiúscula"},
    {Q: "Podemos colocar __ dentro do JSX", R: "expressões"},
    {Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma"},
    {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
    {Q: "Usamos props para __", R: "passar diferentes informações para componentes"},
    {Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]
  const rickRollDeck = [
    {Q: "Never gonna", R: "give you up"},
    {Q: "Never gonna", R: "let you down"},
    {Q: "Never gonna", R: "run around and desert you"},
    {Q: "Never gonna", R: "make you cry"},
    {Q: "Never gonna", R: "say goodbye"},
    {Q: "Never gonna", R: "tell a lie and hurt you"},
]

const [choosedDeck, setChoosedDeck] = useState(drivenDeck)
const questionsNumber = choosedDeck.map((u,i)=> `Palavra ${i+1}`)
const [numInput, setNumInput] = useState(1)
  
  return (
    <ZapMain>
      <GlobalStyle/>
      
      <Home logo={logo}
      drivenDeck={drivenDeck}
      rickRollDeck={rickRollDeck}
      choosedDeck={choosedDeck}
      setChoosedDeck={setChoosedDeck}
      numInput={numInput}
      setNumInput={setNumInput}
      />
      
      <Header logo={logo}/>
      
      <Deck 
      play={play} 
      virar={virar} 
      cardSwitched={cardSwitched} 
      setCardSwitched={setCardSwitched} 
      questionsNumber={questionsNumber}
      zapCards={zapCards}
      setZapCards={setZapCards}
      almoustCards={almoustCards}
      setAlmoustCards={setAlmoustCards}
      forgotCards={forgotCards}
      setForgotCards={setForgotCards}
      answeredCards={answeredCards}
      setAnsweredCards={setAnsweredCards}
      certo={certo} 
      quase={quase} 
      erro={erro}
      answeredCardsIcons={answeredCardsIcons}
      setAnsweredCardsIcons={setAnsweredCardsIcons}
      choosedDeck={choosedDeck}
      numInput={numInput}
      />

      <Footer  
      questionsNumber={questionsNumber}
      answeredCards={answeredCards}
      answeredCardsIcons={answeredCardsIcons}
      />

    </ZapMain>
  );
}

const ZapMain = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`