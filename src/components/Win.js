import styled from "styled-components"
import dog from "../assets/img/cachorro-brasil.gif"

export default function Win({winScreen}) {
    return (
    <WinContainer winScreen={winScreen}>
        <div>
            <p>Parabéns!!!!!! 🥳</p>
            <img src={dog} alt="cachorro dançando"></img>
            <p>Esse dog fica feliz <br/> com seu sucesso :3 </p>
        </div>
    </WinContainer>
    )
};

const WinContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    z-index: 2;
    display: ${props=> props.winScreen===false ? "none" : ""};
    div{
        width: 95%;
    }
    img{
        width: 100%;
        border-radius: 5px;
        margin: 40px 0;
    }
    p{
        width: 100%;
        font-size: 35px;
        text-align: center;
        color: #ffffff;
        font-family: "righteous";
        word-wrap: normal;
    }
`