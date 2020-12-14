import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../Page/MainPage';
import EditorPageContainer from '../../containers/EditorPageContainer';

export default function App() {

  return (
    <>
      <Route path='/' exact component={MainPage} />
      <Route path='/create' component={EditorPageContainer} />
    </>
  );
};
