import Cards from "./Cards"
import { useState } from "react"

export default function Deck({cardSwitched, setCardSwitched, questionsNumber, answeredCards, setAnsweredCards, answeredCardsIcons, setAnsweredCardsIcons, choosedDeck, numInput,setWinScreen,setLoseScreen}) {
    const [zapCards, setZapCards] = useState([])
    return(
        <>
            {questionsNumber.map((question, i) => 
                <Cards 
                key={i} 
                question={question} 
                choosedDeck={choosedDeck} 
                i={i} 
                cardSwitched={cardSwitched} 
                setCardSwitched={setCardSwitched}
                zapCards={zapCards}
                setZapCards={setZapCards}
                answeredCards={answeredCards}
                setAnsweredCards={setAnsweredCards}
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
