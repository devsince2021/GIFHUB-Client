import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';
import AppContainer from './containers/AppContainer';

dotenv.config();

ReactDOM.render(
  <Root>
    <Router>
      <AppContainer />
    </Router>
  </Root>,
  document.getElementById('root')
);
