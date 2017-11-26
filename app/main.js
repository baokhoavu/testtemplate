import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App.jsx';
require('./sass/site.scss');

render((
    <HashRouter>
      <App />
    </HashRouter>
), document.getElementById('container'));
