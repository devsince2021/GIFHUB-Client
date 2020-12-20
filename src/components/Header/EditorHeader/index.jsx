import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '..';
import { Logo, Title } from './styled';

const EditorHeader = ({ currentEditingStep }) => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/');
  };

  const switchTitle = () => {
    if (!currentEditingStep) {
      return 'Step1. Trim your video!';
    } else if (currentEditingStep === 1) {
      return 'Step2. Add your image!';
    } else {
      return 'Step3. Finish your editing!';
    }
  };

  return(
    <>
      <Header simple>
        <Logo onClick={redirectToHome} />
        <Title>{switchTitle()}</Title>
      </Header>
    </>
  );
};

export default EditorHeader;
