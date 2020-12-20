import styled from 'styled-components';

export const CloseButton = styled.button`
  color: ${({theme}) => theme.palette.WHITE};
  background-color: transparent;
  margin-left: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  transform: rotate(45deg);
  grid-column: 12/13;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  margin-left: 1%;
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  grid-column: 1/13;
  grid-row: 2/4;
`;
