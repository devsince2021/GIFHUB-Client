import styled from 'styled-components';

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  align-self: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  margin: 0 5%;
  grid-column: 1/13;
  grid-row: 4/6;
`;

export const Notification = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  align-self: center;
  text-align: center;
  padding-right: 10px;
  grid-column: 1/13;
  grid-row: 10/11;
`;
