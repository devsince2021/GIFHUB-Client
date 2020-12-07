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
  width: 80%;
  height: 60%;
  background-color: ${({ theme }) => theme.palette.WHITE};
  border-radius: 3%;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 22%;
  left: 10%;
  z-index: 9998;
`;

export const ModalPage = styled.div`
  width: 98%;
  height: 98%;
  background-color: ${({ theme }) => theme.palette.BLACK};
  border-radius: 3%;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 1%;
  left: 1%;

  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12,1fr);
  z-index: 9999;
`;

export const CloseButton = styled.button`
  color: ${({theme}) => theme.palette.WHITE};
  background-color: transparent;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  transform: rotate(45deg);
  grid-column: 12/13;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.WHITE};
  text-align: center;
  align-self: center;
  margin-left: 1%;
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  grid-column: 1/13;
  grid-row: 2/4;
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
