import React from 'react';
import { Wrapper, Logo, SearchBar } from './styled';
import { HeaderSearchInput } from '../Input';
import {SearchIconButton, CreateIconButton } from '../Button';
import Modal from '../Modal';
import { FileUploadContent } from '../ModalContent';
import { TITLE, DO_YOU_WANT_LEAVE } from '../../constants/modal';

export default function AppHeader({
  onToggleMediaFileModal,
  onSaveUploadedFile,
  onDeleteSelectedFile,
  onSaveSeletedFile,
  selectedFile,
  isMediaFileModalOpen,

}) {
  function toggleModal() {
    if (selectedFile) {
      if (!window.confirm(DO_YOU_WANT_LEAVE)) return;
      onDeleteSelectedFile();
    }
    onToggleMediaFileModal();
  }

  return (
    <Wrapper>
      <CreateIconButton onClick={toggleModal} />
        {
          isMediaFileModalOpen && //step1
          <Modal
            isOpen={isMediaFileModalOpen}
            onCloseModal={toggleModal}
            title={TITLE}
            decoration
          >
            <FileUploadContent
              onSaveUploadedFile={onSaveUploadedFile}
              onDeleteSelectedFile={onDeleteSelectedFile}
              onSaveSeletedFile={onSaveSeletedFile}
              selectedFile={selectedFile}
            />
          </Modal>
        }
      <Logo />
      <SearchBar>
        <HeaderSearchInput />
        <SearchIconButton />
      </SearchBar>
    </Wrapper>
  );
};
