import ReactDOM from 'react-dom';
import App from './App';
import logo from "./assets/img/logo.png"
import play from "./assets/img/seta_play.png"
import virar from "./assets/img/seta_virar.png"

import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render(<App logo={logo} play={play} virar={virar}/>, document.querySelector('.root'));
