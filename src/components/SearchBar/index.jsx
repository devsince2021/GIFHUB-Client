import React from 'react';
import { Wrapper } from './styled';
import { SearchInput } from '../Input/styled';
import { SearchIconButton } from '../Button/styled';

export default function SearchBar() {

  return (
    <Wrapper>
      <SearchInput />
      <SearchIconButton />
    </Wrapper>
  );
}
