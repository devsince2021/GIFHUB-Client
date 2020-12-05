import styled from 'styled-components';
import { icon } from '../../constants/image';

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.palette.WHITE};
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledSearchIconButton = styled(StyledButton)`
  background-color: ${({theme}) => theme.palette.YELLOW};
  border-radius: 0 2px 2px 0;
`;

export const StyledCreateIconButton = styled(StyledButton)`
  background-image: url(${icon.create});
  margin: 0 0 10px 10px;
  grid-column: 6/7;
  grid-row: 3;
`;

export const StyledModalCloseButton = styled(StyledButton)`
  font-size: 1.1rem;
  transform: rotate(45deg);
  grid-column: 12/13;
`;
