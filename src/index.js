import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import  logger from 'redux-logger';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled.js';
import { theme } from './shared/theme';
import AppContainer from './containers/AppContainer';

import AppReducer from './reducers';
dotenv.config();

const store = createStore(AppReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
