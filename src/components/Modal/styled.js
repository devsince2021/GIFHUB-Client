import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 90em;
  height: 45em;
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 9.5em;
  left: 12%;
  z-index: 1000;
`;

export const ModalPage = styled.div`
  width: 88em;
  height: 43em;
  background-color: black;
  border-radius: 0.5em;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 1em;
  left: 1%;
  z-index: 1000;
`;
