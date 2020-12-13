import styled from 'styled-components';
import { logo } from '../../../constants/image';

export const StyledDiv = styled.div`
  background-size: contain;
  background-repeat: repeat;
  width: 100%;
`;

export const Logo = styled(StyledDiv)`
  background-image: url(${logo.MAIN});
  background-repeat: no-repeat;
  margin-top: 3px;
  grid-column: 3/5;
  grid-row: 1/3;
`;

export const SearchBar = styled.div`
  margin-bottom: 10px;
  grid-column: 2/6;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(14,1fr);
`;
