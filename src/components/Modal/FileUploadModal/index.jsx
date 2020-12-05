import React, { useRef } from 'react';
import Modal from '..';
import { FileUploadInput } from '../../Input';
import { FileUploadContainer, Description, Notification } from './styled';

export default function FileUploadModal({ isOpen, toggleModal }) {
  const hiddenFileInput = useRef(null);
  const title = 'FILE UPLOAD';

  function clickHandler() {
    hiddenFileInput.current.click();
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={toggleModal}
      title={title}
    >
      <Description>
        Upload your GIFs and Videos to share on Facebook, Kakao Talk, Instagram and everywhere else.
      </Description>
      <FileUploadContainer onClick={clickHandler}>
        <FileUploadInput ref={hiddenFileInput} type='file' name='file' />
      </FileUploadContainer>
      <Notification>
        Supported Formats: MOV, MP4, GIF
      </Notification>
    </Modal>
  );
}
