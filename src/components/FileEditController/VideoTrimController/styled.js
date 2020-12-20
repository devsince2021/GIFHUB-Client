import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Description = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  grid-column: 1/13;
  grid-row: 2/3;
`;

export const TimeRangeInputLabel = styled.div`
  font-size: ${({ theme, second }) => second ? theme.fontSize.SMALL : '1rem'};
  width: ${({ width }) => `${100 * width}%`};
  grid-column: ${({ second }) => second ? '8/11' : '2/5'};
  grid-row: ${({ startTime }) => startTime ? '4/5' : '8/9'};
`;

export const TimeRangeInputConatianer = styled.div`
  background-image: linear-gradient(to right, tomato, orange, yellow);
  align-self: center;
  height: 70%;
  border-radius: 3px;
  grid-column: 2/12;
  grid-row: ${({ startTime }) => startTime ? '5/6' : '9/10'};
  margin: 0 0;
  display: grid;
  grid-template-columns: repeat(${({ grid }) => grid - 1}, 1fr);
`;

export const StyledLink = styled(Link)`
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
