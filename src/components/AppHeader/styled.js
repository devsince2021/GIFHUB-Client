import styled from 'styled-components';
import { background, logo } from '../../constants/image';

export const StyledDiv = styled.div`
  background-size: contain;
  background-repeat: repeat;
  width: 100%;
`;

export const Wrapper = styled(StyledDiv)`
  background-image: url(${background.appHeader});
  position: fixed;
  height: 18%;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: repeat(3,1fr);
`;

export const Logo = styled(StyledDiv)`
  background-image: url(${logo.main});
  margin-top: 3px;
  grid-column: 2/6;
  grid-row: 1/3;
`;

export const SearchBar = styled.div`
  margin-bottom: 10px;
  grid-column: 2/6;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(7,1fr);
`;
