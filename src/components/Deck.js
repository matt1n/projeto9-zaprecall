import Cards from "./Cards"

export default function Deck({play, virar, cardSwitched, setCardSwitched, questionsNumber, zapCards, setZapCards, almoustCards, setAlmoustCards, forgotCards, setForgotCards, answeredCards, setAnsweredCards, certo, quase, erro, answeredCardsIcons, setAnsweredCardsIcons, choosedDeck, numInput}) {

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
                numInput={numInput}
                questionsNumber={questionsNumber}
                ></Cards>)
            }
        </>
    )
}
