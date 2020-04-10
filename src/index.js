import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Mainpage from './components/Mainpage';

import './assets/css/plugins/bootstrap.min.css';
import './assets/css/plugins/animate.min.css';
import './assets/css/plugins/fontawesome.css';
import './assets/css/plugins/stellarnav.css';
import './assets/css/plugins/space__grotesk.css';
import './assets/css/typography.css';
import './assets/css/buttons.css';
import './assets/css/inner.css';
import './assets/css/theme.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/responsive.css';

ReactDOM.render(
  <React.StrictMode>
    <Mainpage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
