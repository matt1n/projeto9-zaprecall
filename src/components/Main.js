import styled from "styled-components";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Home from "./Home";

export function Main({logo, play, virar, certo, quase, erro}) {
  const [cardSwitched, setCardSwitched] = useState([])
  const questionsNumber = ["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4","Pergunta 5","Pergunta 6","Pergunta 7","Pergunta 8",]
  const [answeredCards, setAnsweredCards] = useState([])
  const [zapCards, setZapCards] = useState([])
  const [almoustCards, setAlmoustCards] = useState([])
  const [forgotCards, setForgotCards] = useState([])
  
  return (
    <ZapMain>
        <Home logo={logo}/>
        
        <Header logo={logo}/>
        
        <Deck 
        play={play} 
        virar={virar} 
        cardSwitched={cardSwitched} 
        setCardSwitched={setCardSwitched} 
        questionsNumber={questionsNumber}
        zapCards={zapCards}
        almoustCards={almoustCards}
        forgotCards={forgotCards}
        answeredCards={answeredCards}
        certo={certo} 
        quase={quase} 
        erro={erro}
        />

        <Footer 
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