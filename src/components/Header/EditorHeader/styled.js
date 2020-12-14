import styled from 'styled-components';
import { logo } from '../../../constants/image';

export const Logo = styled.div`
  background-image: url(${logo.MAIN});
  background-size: 70%;
  background-repeat: no-repeat;
  margin: 8px 0 0 10px;
  grid-column: 2/10;
  grid-row: 2/4;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  text-align: center;
  margin: 8px 0 0 8%;
  grid-column: 4/22;
  grid-row: 2/4;
`;
