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
  closeModal,
  title,
}) {
  if (!isOpen) return null;
  return createPortal(
    <>
      <Overlay onClick={closeModal}>
        <WackyTubeMan direction='left'/>
        <WackyTubeMan />
      </Overlay>
      <ModalContainer>
        <ModalPage>
          <CloseButton>+</CloseButton>
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
