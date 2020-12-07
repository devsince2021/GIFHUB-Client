import React, { useState } from 'react';
import { Wrapper, Logo, SearchBar } from './styled';
import { HeaderSearchInput } from '../Input';
import {SearchIconButton, CreateIconButton } from '../Button';
import Modal from '../Modal';
import { FileUploadContent } from '../ModalContent';

import { TITLE } from '../../constants/modal';

export default function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Wrapper>
      <CreateIconButton onClick={toggleModal} />
        {
          isModalOpen && //step1
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            title={TITLE}
            decoration
          >
            <FileUploadContent />
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
