import styled from 'styled-components';
import { icon } from '../../constants/image';

export const FileUploadForm = styled.form`
  background-color: ${({theme}) => theme.palette.WHITE};
  height: 70%;
  border-radius: 3px;
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
  margin: 5px 0 0 3px;
  grid-column: 1/2;
`;

export const SelectedFileName = styled.div`
  font-size: ${({ theme, size }) => theme.fontSize[size] || '1rem' };
  margin-left: 8px;
  align-self: center;
  grid-column: 2/6;
`;
