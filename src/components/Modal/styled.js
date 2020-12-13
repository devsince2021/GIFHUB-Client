import styled from 'styled-components';
import { logo } from '../../constants/image';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9997;
`;

export const ModalContainer = styled.div`
  width: 50%;
  height: 60%;
  background-color: ${({ theme }) => theme.palette.WHITE};
  border-radius: 6px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 22%;
  left: 25%;
  z-index: 9998;
`;

export const ModalPage = styled.div`
  width: 99%;
  height: 98%;
  background-color: ${({ theme }) => theme.palette.BLACK};
  border-radius: 6px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 1%;
  left: 0.5%;

  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12,1fr);
  z-index: 9999;
`;

export const WackyTubeMan = styled.div`
  background-image: url(${logo.WACKY_TUBE_MAN});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -10%;
  left: ${props => props.direction === 'left' ? '22%' : '46%'};
  width: 100%;
  height: 50%;
  z-index: 9999;
`;
