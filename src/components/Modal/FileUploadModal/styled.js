import styled from 'styled-components';
import { logo } from '../../../constants/image';

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  align-self: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  margin: 0 5%;
  grid-column: 1/13;
  grid-row: 4/6;
`;

export const Notification = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  align-self: center;
  text-align: center;

  grid-column: 1/13;
  grid-row: 9/11;
`;

export const WackyTubeMan = styled.div`
  background-image: url(${logo.WACKY_TUBE_MAN});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -10%;
  left: ${props => props.direction === 'left' ? '-5%' : '30%'};
  width: 100%;
  height: 50%;
  z-index: 9999;
`;

