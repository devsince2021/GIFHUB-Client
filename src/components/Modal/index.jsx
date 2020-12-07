import React from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  ModalPage,
  WackyTubeMan,
} from './styled';

export default function Modal({
  isOpen,
  children,
  onCloseModal,
  title,
  decoration,
}) {
  if (!isOpen) return null;

  function decorateModal() {
    return (
      <>
        <WackyTubeMan direction='left'/>
        <WackyTubeMan />
      </>
    );
  }

  return createPortal(
    <>
      <Overlay onClick={onCloseModal}>
        {decoration && decorateModal()}
      </Overlay>
      <ModalContainer>
        <ModalPage>
          <CloseButton onClick={onCloseModal}>+</CloseButton>
          <Title>
            {title}
          </Title>
          {children}
        </ModalPage>
      </ModalContainer>
    </>,
    document.getElementById('portal')
  );
};
