import styled from "styled-components";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";

export function Main({logo, play, virar}) {
  return (
    <ZapMain>
        <Header logo={logo}/>
        <Deck play={play} virar={virar} />
        <Footer />
    </ZapMain>
  );
}

const ZapMain = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`