import styled from 'styled-components';
import { icon } from '../../../constants/image';

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  align-self: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0 5%;
  grid-column: 1/13;
  grid-row: 4/6;
`;

export const FileUploadContainer = styled.div`
  background-color: ${({theme}) => theme.palette.WHITE};
  background-image: url(${icon.fileUploadInput});
  background-size: contain;
  background-repeat: no-repeat;
  height: 70%;
  border-radius: 3px;
  grid-column: 4/10;
  grid-row: 7/9;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const Notification = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  font-size: ${({ theme }) => theme.fontSize.small};
  align-self: center;
  text-align: center;

  grid-column: 1/13;
  grid-row: 9/11;
`;
