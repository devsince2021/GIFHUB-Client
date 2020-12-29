import styled from 'styled-components';

export const Description = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  grid-column: 1/12;
  grid-row: 2/3;
`;

export const ControllerLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  grid-column: ${({ list }) => list ? '8/12' : '2/6'};
  grid-row: ${({ format }) => format ? '4/5' : '8/9'};
`;
