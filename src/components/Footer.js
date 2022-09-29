import styled from "styled-components"

export default function Footer() {
    const ButtonsFooter = [
        {name:"Não lembrei", color: "#FF3030"},
        {name:"Quase não lembrei", color: "#FF922E"},
        {name:"ZAP!", color: "#2FBE34"}
    ]
    
    return(
    <FooterStyled>
        <Botoes>
            {ButtonsFooter.map((b,i) => 
            <Botao key={i} color={b.color}>{b.name}</Botao>)
            }
        </Botoes>
        <p>Concluídas: 0/4</p>
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