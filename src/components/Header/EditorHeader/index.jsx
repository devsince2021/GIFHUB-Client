import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '..';
import { Logo, Title } from './styled';

export default function EditorHeader({ currentEditingStep }) {
  const history = useHistory();

  function redirectToHome() {
    history.push('/');
  }

  function switchTitle() {
    let title;
    if (!currentEditingStep) {
      return title = 'Step1. Trim your video!'
    } else if (currentEditingStep === 1) {
      return title = 'Step2. Add your image!'
    } else {
      return title = 'Step3. Finish your editing!'
    }
  }

  return(
    <>
      <Header simple>
        <Logo onClick={redirectToHome} />
        <Title>{switchTitle()}</Title>
      </Header>
    </>
  );
}
