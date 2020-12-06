import React from 'react';
import Modal from '..';
import { Description, Notification, WackyTubeMan } from './styled';
import FileUploader from '../../FileUploader';
import { TITLE, DESCRIPTION, NOTIFICATION } from '../../../constants/modal';

export default function FileUploadModal({ isOpen, toggleModal }) {

  function decorateModal() {
    return (
      <>
        <WackyTubeMan direction='left'/>
        <WackyTubeMan />
      </>
    );
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={toggleModal}
        title={TITLE}
        decoration={decorateModal()}
      >
        <Description>
          {DESCRIPTION}
        </Description>
        <FileUploader />
        <Notification>
          {NOTIFICATION}
        </Notification>
      </Modal>
    </>
  );
}
