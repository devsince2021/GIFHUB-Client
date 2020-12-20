import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import  Header  from '..';
import { Logo, SearchBar } from './styled';
import { HeaderSearchInput } from '../../Input';
import {SearchIconButton, CreateIconButton } from '../../Button';
import FileUploadModal from '../../Modal/FileUploadModal';
import { FileUploadContent, LoadingContent } from '../../ModalContent';
import { title, DO_YOU_WANT_LEAVE } from '../../../constants/modal';

const MainHeader = ({
  onToggleMediaFileModal,
  onSaveUploadedFile,
  onDeleteSelectedFile,
  onSaveSeletedFile,
  selectedFile,
  uploadedFile,
  isMediaFileModalOpen,
  isLoading,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!uploadedFile || isLoading) return;
    moveTrimVideoPage();
  }, [uploadedFile, isLoading]);

  const toggleModal = () => {
    if (selectedFile) {
      if (!window.confirm(DO_YOU_WANT_LEAVE)) return;
      onDeleteSelectedFile();
    }
    onToggleMediaFileModal();
  };

  const moveTrimVideoPage = () => {
    onToggleMediaFileModal();
    history.push('/create/trim-video');
  };

  return (
    <Header>
      <CreateIconButton onClick={toggleModal} />
        {
          isMediaFileModalOpen &&
          <FileUploadModal
            isOpen={isMediaFileModalOpen}
            onCloseModal={toggleModal}
            title={isLoading ? title.LOADING : title.UPLOAD}
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
                selectedFile={selectedFile}
              />
            }
          </FileUploadModal>
        }
      <Logo />
      <SearchBar>
        <HeaderSearchInput />
        <SearchIconButton />
      </SearchBar>
    </Header>
  );
};

export default MainHeader;
