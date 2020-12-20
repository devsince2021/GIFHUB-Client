import styled from 'styled-components';
import { icon } from '../../constants/image';

export const FileUploadForm = styled.form`
  background-color: ${({theme}) => theme.palette.WHITE};
  height: ${({video}) => video ? '70%' : '100%'};
  border-radius: 4px;
  grid-column: 4/10;
  grid-row: 7/9;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const FileSelectIcon = styled.div`
  background-color: ${({theme}) => theme.palette.WHITE};
  background-image: url(${icon.FILE_SELECT_INPUT});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 0 0 0 4px;
  grid-column: 1/2;
`;

export const SelectedFileName = styled.div`
  color: ${({ theme }) => theme.palette.BLACK};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.MEDIUM};
  margin-left: 8px;
  align-self: center;
  grid-column: 2/6;
`;
