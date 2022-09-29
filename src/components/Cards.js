import play from "src/assets/img/seta_play.png"
import virar from "src/assets/img/seta_virar.png"
import { useState } from "react"
import styled from "styled-components"

export default function Cards({question, questionAndAnswer, i}) {
    const [cardClicked, setCardClicked] = useState(false)
    const [cardSwitch, setCardSwitch] = useState(false)
    
    return (
        <Card cardClicked={cardClicked}>
            <p>{cardClicked === false ? question : cardSwitch===false ? questionAndAnswer[i].Q : questionAndAnswer[i].R}</p>
            {cardSwitch===false ? <img onClick={cardClicked === false ? ()=>setCardClicked(true) : ()=>setCardSwitch(true)} src={cardClicked === false ? play : virar} alt="Botão Play"/> : undefined}
        </Card>
    )
};

const Card = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: ${props => props.cardClicked === false ? "35px" : "100px"}; //muda
    background-color: ${props => props.cardClicked === false ? "#FFFFFF" : "#FFFFD5"}; //muda
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${props => props.cardClicked === false ? "center" : "flex-start"};
    flex-direction: ${props => props.cardClicked === false ? "row" : "column"}; //muda
    justify-content: space-between;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => props.cardClicked === false ? "700" : "400"}; //muda
    font-size: ${props => props.cardClicked === false ? "16px" : "18px"}; //muda
    line-height: ${props => props.cardClicked === false ? "19px" : "22px"}; //muda
    color: #333333;
    position: relative;
    img{
        position: ${props => props.cardClicked === false ? "" : "absolute"} ;
        bottom: ${props => props.cardClicked === false ? "" : "10px"};
        right: ${props => props.cardClicked === false ? "" : "10px"};
    }
`
