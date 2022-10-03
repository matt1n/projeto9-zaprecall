import Cards from "./Cards"
import { useState } from "react"

export default function Deck({play, virar, cardSwitched, setCardSwitched, questionsNumber, answeredCards, setAnsweredCards, zap, almoust, forgot, answeredCardsIcons, setAnsweredCardsIcons, choosedDeck, numInput,setWinScreen,setLoseScreen}) {
    const [zapCards, setZapCards] = useState([])
    return(
        <>
            {questionsNumber.map((question, i) => 
                <Cards 
                key={i} 
                question={question} 
                choosedDeck={choosedDeck} 
                i={i} 
                play={play} 
                virar={virar} 
                cardSwitched={cardSwitched} 
                setCardSwitched={setCardSwitched}
                zapCards={zapCards}
                setZapCards={setZapCards}
                answeredCards={answeredCards}
                setAnsweredCards={setAnsweredCards}
                zap={zap} 
                almoust={almoust} 
                forgot={forgot}
                answeredCardsIcons={answeredCardsIcons}
                setAnsweredCardsIcons={setAnsweredCardsIcons}
                numInput={numInput}
                questionsNumber={questionsNumber}
                setWinScreen={setWinScreen}
                setLoseScreen={setLoseScreen}
                ></Cards>)
            }
        </>
    )
}
