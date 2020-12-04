import React from 'react';
import Modal from '../Modal';

export default function FileUploadModal({ toggleModal, isModalOpen }) {

  return (
    <Modal isOpen={isModalOpen} closeModal={toggleModal} >
      <div>1</div>
    </Modal>
  );
}
