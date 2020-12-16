import React from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContainer,
  ModalPage,
  WackyTubeMan,
} from './styled';

export default function Modal({
  isOpen,
  children,
  onCloseModal,
  decoration,
  width,
  height,
  top,
  left,
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
      <ModalContainer
        width={width}
        height={height}
        top={top}
        left={left}
      >
        <ModalPage>
          {children}
        </ModalPage>
      </ModalContainer>
    </>,
    document.getElementById('portal')
  );
};
