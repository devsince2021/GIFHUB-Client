import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../Page/HomePage';
import TrimVideoPage from '../Page/TrimVideoPage';

export default function App({ uploadedFile, currentEditingStep }) {

  return (
    <>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/create/trim-video'>
        <TrimVideoPage uploadedFile={uploadedFile} />
      </Route>
    </>
  );
};
