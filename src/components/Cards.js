import { useState } from "react"
import styled from "styled-components"

export default function Cards({question, choosedDeck, i, play, virar, cardSwitched, setCardSwitched, zapCards, setZapCards, almoustCards, setAlmoustCards, forgotCards, setForgotCards, answeredCards, setAnsweredCards, certo, quase, erro, answeredCardsIcons, setAnsweredCardsIcons, numInput}) {
    const [cardClicked, setCardClicked] = useState(false)
    const [cardSwitch, setCardSwitch] = useState(false)

    const ButtonsFooter = [
        {name:"Não lembrei", color: "#FF3030"},
        {name:"Quase não lembrei", color: "#FF922E"},
        {name:"ZAP!", color: "#2FBE34"}
    ]

    function switchCard(){
    if  (cardSwitched.length===0 || cardSwitched.includes(question))
        if(cardClicked === false){
            setCardClicked(true)
        } else {
            setCardSwitch(true)
            setCardSwitched([question])
        }
    }

    function wordColor(){
        if (zapCards.includes(question)){
            return "#2FBE34"
        } else if (almoustCards.includes(question)){
            return "#FF922E"
        } else if (forgotCards.includes(question)){
            return "#FF3030"
        } else {
            return "#333333"
        }
    }

    function cardText(){
        
        if (cardClicked === false || answeredCards.includes(question)){
            return question
        } else if (cardSwitch===false){
            return choosedDeck[i].Q
        } else {
            return choosedDeck[i].R
        }
    }

    function cardIcon(){
        if (cardSwitch===false) {
            return <img onClick={switchCard} src={cardClicked === false ? play : virar} alt="Botão Play"/>
        } else if (zapCards.includes(question)){
            return <img src={certo} alt="Botão Play"/>
        } else if (almoustCards.includes(question)) {
            return <img src={quase} alt="Botão Play"/>
        } else if (forgotCards.includes(question)){
            return <img src={erro} alt="Botão Play"/>
        } else {
            return undefined
        }
    }
    
    function pressButton(i){
        if (cardSwitched.length!==0){
            if (i===0){
                const newAnsweredCards = [...answeredCards, cardSwitched[0]]
                setAnsweredCards(newAnsweredCards)
                setForgotCards([...forgotCards, cardSwitched[0]])
                setAnsweredCardsIcons([...answeredCardsIcons, erro])
                setCardSwitched([])
                if (choosedDeck.length===newAnsweredCards.length){
                    if (zapCards.length>=numInput){
                        alert("Parabéns!!!!!! 🥳")
                    } else {
                        alert("Putz... 😢")
                    }
                }
            } else if (i===1){
                const newAnsweredCards = [...answeredCards, cardSwitched[0]]
                setAnsweredCards(newAnsweredCards)
                setAlmoustCards([...almoustCards, cardSwitched[0]])
                setAnsweredCardsIcons([...answeredCardsIcons, quase])
                setCardSwitched([])
                if (choosedDeck.length===newAnsweredCards.length){
                    if (zapCards.length>=numInput){
                        alert("Parabéns!!!!!! 🥳")
                    } else {
                        alert("Putz... 😢")
                    }
                }
            } else {
                const newAnsweredCards = [...answeredCards, cardSwitched[0]]
                const newZapCards = [...zapCards, cardSwitched[0]]
                setAnsweredCards(newAnsweredCards)
                setZapCards(newZapCards)
                setAnsweredCardsIcons([...answeredCardsIcons, certo])
                setCardSwitched([])
                if (choosedDeck.length===newAnsweredCards.length){
                    if (newZapCards.length>=numInput){
                        alert("Parabéns!!!!!! 🥳")
                    } else {
                        alert("Putz... 😢")
                    }
                }
            }
        }
    }

    return (
        <Card cardClicked={cardClicked} wordColor={wordColor} answeredCards={answeredCards} question={question}>
            <p>{cardText()}</p>
            {cardIcon()}
            {cardSwitch === true && cardSwitched.includes(question) ? <Botoes>
            {ButtonsFooter.map((b,i) => 
            <Botao onClick={()=>pressButton(i)} key={i} color={b.color}>{b.name}</Botao>)
            }
        </Botoes> : undefined}
        </Card>
    )
};

const Card = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: ${props => props.cardClicked === false || props.answeredCards.includes(props.question)? "35px" : "100px"}; //muda
    background-color: ${props => props.cardClicked === false || props.answeredCards.includes(props.question)? "#FFFFFF" : "#FFFFD5"}; //muda
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${props => props.cardClicked === false|| props.answeredCards.includes(props.question) ? "center" : "flex-start"};
    flex-direction: ${props => props.cardClicked === false|| props.answeredCards.includes(props.question) ? "row" : "column"}; //muda
    justify-content: space-between;
    text-decoration: ${props=> props.answeredCards.includes(props.question) ? "line-through" : ""};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => props.cardClicked === false|| props.answeredCards.includes(props.question) ? "700" : "400"}; //muda
    font-size: ${props => props.cardClicked === false|| props.answeredCards.includes(props.question) ? "16px" : "18px"}; //muda
    line-height: ${props => props.cardClicked === false|| props.answeredCards.includes(props.question) ? "19px" : "22px"}; //muda
    color: ${props=> props.wordColor};
    position: relative;
    img{
        position: ${props => props.cardClicked === false || props.answeredCards.includes(props.question) ? "" : "absolute"} ;
        bottom: ${props => props.cardClicked === false || props.answeredCards.includes(props.question) ? "" : "10px"};
        right: ${props => props.cardClicked === false  || props.answeredCards.includes(props.question) ? "" : "10px"};
    }
`

const Botoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
`
const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background-color: ${props=> props.color};
    border-radius: 5px;
    border: 1px solid ${props=> props.color};
    padding:5px;
`
