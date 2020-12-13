import React from 'react';
import Modal from '..';
import { CloseButton, Title } from './styled';

export default function FileUploadModal({
  isOpen,
  onCloseModal,
  title,
  children,
  decoration,
}) {
  return(
    <Modal
      isOpen={isOpen}
      onCloseModal={onCloseModal}
      decoration={decoration}
    >
      <CloseButton onClick={onCloseModal}>+</CloseButton>
      <Title>
        {title}
      </Title>
      {children}
    </Modal>
  );
}
