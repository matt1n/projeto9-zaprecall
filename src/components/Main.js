import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Home from "./Home";


export function Main({logo, play, virar, zap, almoust, forgot}) {
  const [cardSwitched, setCardSwitched] = useState([])

  const [answeredCards, setAnsweredCards] = useState([])
  const [zapCards, setZapCards] = useState([])
  const [almoustCards, setAlmoustCards] = useState([])
  const [forgotCards, setForgotCards] = useState([])
  const [answeredCardsIcons, setAnsweredCardsIcons] = useState([])

const [choosedDeck, setChoosedDeck] = useState([])
const questionsNumber = choosedDeck.map((u,i)=> `Palavra ${i+1}`)
const [numInput, setNumInput] = useState('')
  
  return (
    <ZapMain>
      <GlobalStyle/>
      
      <Home logo={logo}
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
      zap={zap} 
      almoust={almoust} 
      forgot={forgot}
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