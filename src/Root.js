import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import  logger from 'redux-logger';
import AppReducer from './reducers';

import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import { GlobalStyle } from './styled.js';

 const Root = ({ children }) => {
  const store = createStore(
    AppReducer,
    applyMiddleware(ReduxThunk, logger)
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>);
};

export default Root;
