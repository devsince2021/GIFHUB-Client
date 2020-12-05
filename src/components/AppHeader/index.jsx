import React, { useState } from 'react';
import { Wrapper, Logo, SearchBar } from './styled';
import { HeaderSearchInput } from '../Input';
import {SearchIconButton, CreateIconButton } from '../Button';
import FileUploadModal from '../Modal/FileUploadModal';

export default function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Wrapper>
      <CreateIconButton onClick={toggleModal} />
        {
          isModalOpen &&
          <FileUploadModal isOpen={isModalOpen} toggleModal={toggleModal} />
        }
      <Logo />
      <SearchBar>
        <HeaderSearchInput />
        <SearchIconButton />
      </SearchBar>
    </Wrapper>
  );
};
