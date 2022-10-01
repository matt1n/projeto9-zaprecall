import ReactDOM from 'react-dom';
import App from './App';
import logo from "./assets/img/logo.png"
import play from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"
import zap from "./assets/img/icone_certo.png"
import almoust from "./assets/img/icone_quase.png"
import forgot from "./assets/img/icone_erro.png"

ReactDOM.render(<App logo={logo} play={play} virar={virar} zap={zap} almoust={almoust} forgot={forgot} />, document.querySelector('.root'));
