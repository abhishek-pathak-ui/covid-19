import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import makeStore from './store';
import './index.css';
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

const store = makeStore();
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <Mainpage />
  </Provider>,
  document.getElementById('root')
);
