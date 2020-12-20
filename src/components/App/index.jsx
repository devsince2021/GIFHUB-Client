import React from 'react';
import { Route } from 'react-router-dom';
import { EditorPageContainer, MainPageContainer } from '../../containers';

export default function App() {

  return (
    <>
      <Route path='/' exact component={MainPageContainer} />
      <Route path='/create' component={EditorPageContainer} />
    </>
  );
};
