import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import FileUploadModal from './fileUploadModal';
import { Wrapper, LogoContainer, WackyContainer } from './styled';
import { UploadIconButton, AccountIconButton } from '../Button/styled';

export default function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Wrapper>
      <LogoContainer />
      <WackyContainer />
      <section>
        <SearchBar />
        <UploadIconButton />
        <UploadIconButton onClick={toggleModal}>create</UploadIconButton>
        <AccountIconButton />
      </section>
      {
        isModalOpen &&
        <FileUploadModal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      }
    </Wrapper>

  );
};
