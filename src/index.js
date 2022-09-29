import ReactDOM from 'react-dom';
import App from './App';
import logo from "./assets/img/logo.png"
import play from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"
import certo from "./assets/img/icone_certo.png"
import quase from "./assets/img/icone_quase.png"
import erro from "./assets/img/icone_erro.png"

import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render(<App logo={logo} play={play} virar={virar} certo={certo} quase={quase} erro={erro} />, document.querySelector('.root'));
