import styled from "styled-components"
import play from "/home/mateus/Documents/Projetos/projeto9-zaprecall/src/assets/img/seta_play.png"

export default function Deck() {
    const array = ["Pergunta1","Pergunta2","Pergunta3","Pergunta4","Pergunta5","Pergunta6","Pergunta7","Pergunta8",]

    return(
        <>
            {array.map((p) => 
            <Card key={p}>
                {p}
                <img src={play} alt="Botão Play"/>
            </Card>)
            }
        </>
    )
}

const Card = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
