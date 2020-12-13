import styled from 'styled-components';
import { logo } from '../../../constants/image';

export const Logo = styled.div`
  background-image: url(${logo.MAIN});
  background-size: 70%;
  background-repeat: no-repeat;

  grid-column: 1/3;
  grid-row: 2/4;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  text-align: center;
  margin: 5px 0 0 8%;
  grid-column: 2/6;
  grid-row: 2/4;
`;
