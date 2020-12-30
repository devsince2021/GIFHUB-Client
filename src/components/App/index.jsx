import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditorPageContainer, MainPageContainer } from '../../containers';

const App = () => (
  <Switch>
    <Route path='/' exact component={MainPageContainer} />
    <Route path='/create' component={EditorPageContainer} />
  </Switch>
);

export default App;
