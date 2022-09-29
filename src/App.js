import { Main } from "./components/Main"

export default function App({logo, play, virar, certo, quase, erro}){
    return(
      <Main logo={logo} play={play} virar={virar} certo={certo} quase={quase} erro={erro}/>
    )
}
