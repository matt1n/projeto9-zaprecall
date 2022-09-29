import styled from "styled-components"

export default function Footer({cardSwitched, setCardSwitched, questionsNumber, zapCards, setZapCards, almoustCards, setAlmoustCards, forgotCards, setForgotCards, answeredCards, setAnsweredCards}) {
    const ButtonsFooter = [
        {name:"Não lembrei", color: "#FF3030"},
        {name:"Quase não lembrei", color: "#FF922E"},
        {name:"ZAP!", color: "#2FBE34"}
    ]
    
    function pressButton(i){
        if (cardSwitched.length!==0){
            if (i===0){
                console.log("ESQUECI ;-;")
                setAnsweredCards([...answeredCards, cardSwitched[0]])
                setForgotCards([...forgotCards, cardSwitched[0]])
                setCardSwitched([])
            } else if (i===1){
                console.log("IIIII QUASE QUE NÃO LEMBRO")
                setAnsweredCards([...answeredCards, cardSwitched[0]])
                setAlmoustCards([...almoustCards, cardSwitched[0]])
                setCardSwitched([])
            } else {
                console.log("ZAP!!!!")
                setAnsweredCards([...answeredCards, cardSwitched[0]])
                setZapCards([...zapCards, cardSwitched[0]])
                setCardSwitched([])
            }
        }
    }

    return(
    <FooterStyled>
        <Botoes>
            {ButtonsFooter.map((b,i) => 
            <Botao onClick={()=>pressButton(i)} key={i} color={b.color}>{b.name}</Botao>)
            }
        </Botoes>
        <p>Concluídas: {answeredCards.length}/{questionsNumber.length}</p>
    </FooterStyled>
    )
}

const FooterStyled = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const Botoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
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