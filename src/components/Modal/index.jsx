import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalPage } from './styled';

export default function Modal({
  isOpen,
  children,
  closeModal,
}) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        <ModalPage>
          {children}
        </ModalPage>
      </ModalContainer>
    </>,
    document.getElementById('portal')
  );
}
