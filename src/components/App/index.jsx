import React from 'react';
import { Route } from 'react-router-dom';
import { EditorPageContainer, MainPageContainer } from '../../containers';

const App = () => (
  <>
    <Route path='/' exact component={MainPageContainer} />
    <Route path='/create' component={EditorPageContainer} />
  </>
);

export default App;
