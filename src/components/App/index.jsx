import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../Page/MainPage';
import EditorPage from '../Page/EditorPage';

export default function App({ uploadedFile, currentEditingStep }) {

  return (
    <>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/create'>
        <EditorPage uploadedFile={uploadedFile} currentEditingStep={currentEditingStep} />
      </Route>
    </>
  );
};
