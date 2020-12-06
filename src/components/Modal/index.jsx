import React from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  ModalPage,
} from './styled';

export default function Modal({
  isOpen,
  children,
  closeModal,
  title,
  decoration,
}) {
  if (!isOpen) return null;
  return createPortal(
    <>
      <Overlay onClick={closeModal}>
        {decoration}
      </Overlay>
      <ModalContainer>
        <ModalPage>
          <CloseButton onClick={closeModal}>+</CloseButton>
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
