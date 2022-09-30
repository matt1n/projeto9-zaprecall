import styled from "styled-components"

export default function Footer({questionsNumber, answeredCards, answeredCardsIcons}) {

    return(
    <FooterStyled>
        <p>Concluídas: {answeredCards.length}/{questionsNumber.length}</p>
        {answeredCardsIcons.length!==0 ?<AnswerList>
            {answeredCardsIcons.map((u,i)=> <img key={i} src={u} alt="icon"/>)}
        </AnswerList> : undefined}
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
    box-shadow: 0px -4px 6px #00000015;
    p{
        margin-top: 8px;
        margin-bottom: 8px;
    }
`
const AnswerList = styled.div`
    height: 23px;
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    img{
        height: 23px;
        margin: 0 2.5px;
    }
`