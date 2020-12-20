import styled from 'styled-components';
import { logo } from '../../constants/image';

export const StyledH1 = styled.h1`
  color: ${({theme}) => theme.palette.WHITE};
`;

export const WackyTubeMan = styled.div`
  background-image: url(${logo.WACKY_TUBE_MAN});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 12%;
  left: 22%;
  width: 100%;
  height: 80%;
  z-index: 9999;
`;
