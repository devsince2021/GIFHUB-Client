import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Description = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  grid-column: 1/12;
  grid-row: 2/3;
`;

export const ControllerLabel = styled.div`
  font-size: 1rem;
  grid-column: ${({ list }) => list ? '8/12' : '2/6'};
  grid-row: ${({ format }) => format ? '4/5' : '8/9'};
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.palette.YELLOW};
  color: ${({ theme }) => theme.palette.WHITE};
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  border-radius: 3px;
  grid-column: 10/12;
  grid-row: 11/12;
`;
