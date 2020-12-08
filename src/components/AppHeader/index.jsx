import React from 'react';
import { Wrapper, Logo, SearchBar } from './styled';
import { HeaderSearchInput } from '../Input';
import {SearchIconButton, CreateIconButton } from '../Button';
import Modal from '../Modal';
import { FileUploadContent, LoadingContent } from '../ModalContent';
import { title, DO_YOU_WANT_LEAVE } from '../../constants/modal';

export default function AppHeader({
  onToggleMediaFileModal,
  onSaveUploadedFile,
  onDeleteSelectedFile,
  onSaveSeletedFile,
  onChangeEdtingStep,
  selectedFile,
  uploadedFile,
  isMediaFileModalOpen,
  currentEditingStep,
  isLoading,
}) {
  console.log(currentEditingStep, 'c')
  function toggleModal() {
    if (selectedFile) {
      if (!window.confirm(DO_YOU_WANT_LEAVE)) return;
      onDeleteSelectedFile();
    }
    onToggleMediaFileModal();
  }

  function switchTitle() {
    if (isLoading) {
      return title.LOADING;
    }
    return title[`STEP${currentEditingStep}`]
  }

  return (
    <Wrapper>
      <CreateIconButton onClick={toggleModal} />
        {
          isMediaFileModalOpen &&
          <Modal
            isOpen={isMediaFileModalOpen}
            onCloseModal={toggleModal}
            title={switchTitle()}
            decoration
          >
            {
              isLoading && <LoadingContent />

            }
            {
              !uploadedFile && !isLoading &&
              <FileUploadContent
                onSaveUploadedFile={onSaveUploadedFile}
                onDeleteSelectedFile={onDeleteSelectedFile}
                onSaveSeletedFile={onSaveSeletedFile}
                onChangeEdtingStep={onChangeEdtingStep}
                selectedFile={selectedFile}
              />
            }
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
