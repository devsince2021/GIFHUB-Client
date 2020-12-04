import styled from 'styled-components';
import { icon } from '../../constants/image';

export const StyledButton = styled.button`
  background-color: red;
`;

export const SearchIconButton = styled(StyledButton)`
  background-image: url(${icon.searchBar});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 4em;
`;

export const UploadIconButton = styled(StyledButton)`
  background-image: url(${icon.upload});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 4em;
`;

export const AccountIconButton = styled(StyledButton)`
  background-image: url(${icon.account});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 4em;
`;

export const ModalCloseButton = styled(StyledButton)`
  margin-left: 90%;
  background-color: transparent;
  border: none;
`;
