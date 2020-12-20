import styled, { css } from 'styled-components';
import { icon } from '../../constants/image';

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.WHITE};
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledSearchIconButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.palette.YELLOW};
  background-image: url(${icon.SEARCH});
  border-radius: 0 3px 3px 0;
`;

export const StyledCreateIconButton = styled(StyledButton)`
  background-image: url(${icon.CREATE});
  margin: 0 0 10px 10px;
  grid-column: 20/22;
  grid-row: 3;
`;

export const StyledFileUploadIconButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.palette.WHITE};
  background-image: url(${icon.FILE_SUBMIT_INTPUT});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 15px 5px 5px 5px;
  grid-column: 6/7;

  ${props =>
    props.disabled &&
    css`
      display: none;
    `}
`;

export const StyledEditFinishButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.palette.YELLOW};
  color: ${({ theme }) => theme.palette.WHITE};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  text-align: center;
  padding-top: 3px;
  border-radius: 3px;
  grid-column: 10/12;
  grid-row: 11/12;
`;

export const StyledCancelButton = styled(StyledButton)`
  border: ${({ theme }) => `1px solid ${theme.palette.GRAY}`};
  background-color: ${({ download, theme }) => download ? theme.palette.GREEN : 'tarnsparent'};
  grid-column: ${({ download }) => download ? '7/10' : '4/7'};
  grid-row: 8/10;
`;
