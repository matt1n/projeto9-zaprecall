import { useState } from "react"
import styled from "styled-components"

export default function Cards({question, questionAndAnswer, i, play, virar, cardSwitched, setCardSwitched, zapCards, almoustCards, forgotCards, answeredCards, certo, quase, erro}) {
    const [cardClicked, setCardClicked] = useState(false)
    const [cardSwitch, setCardSwitch] = useState(false)

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
            return questionAndAnswer[i].Q
        } else {
            return questionAndAnswer[i].R
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
    
    return (
        <Card cardClicked={cardClicked} wordColor={wordColor} answeredCards={answeredCards} question={question}>
            <p>{cardText()}</p>
            {cardIcon()}
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
