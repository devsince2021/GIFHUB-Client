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
  margin: 3px 0 0 8%;
  grid-column: 8/17;
  grid-row: 1/3;
`;

export const SearchBar = styled.div`
  margin-bottom: 10px;
  grid-column: 5/20;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(14,1fr);
`;
