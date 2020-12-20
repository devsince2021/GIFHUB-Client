import styled from 'styled-components';

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  margin-left: 1%;
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  grid-column: 1/13;
  grid-row: 3/4;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  margin-left: 1%;
  font-size: ${({ theme, download }) => download ? theme.fontSize.SMALL : '1rem'};;
  grid-column: ${({ download }) => download ? '2/12' : '1/13'};
  grid-row: ${({ download }) => download ? '5/6' : '7/8'};
`;

export const StyeldAnchor = styled.a`
  background-color: ${({ theme }) => theme.palette.GREEN};
  color: ${({theme}) => theme.palette.WHITE};
  border: none;
  border-radius: 3px;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.XSMALL};
  padding-top: 13px;
  grid-column: 7/10;
  grid-row: 8/10;
  cursor: pointer;
`
