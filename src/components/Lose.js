import styled from "styled-components"
import cat from "../assets/img/gifs-sad-cat-1.gif"

export default function Lose({loseScreen}) {
    return (
    <LoseContainer loseScreen={loseScreen}>
        <div>
            <p>Putz... 😢</p>
            <img src={cat} alt="cachorro dançando"></img>
            <p>Esse gatinho entende <br/> a sua dor ;-;</p>
        </div>
    </LoseContainer>
    )
};

const LoseContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    z-index: 2;
    display: ${props=> props.loseScreen===false ? "none" : ""};
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