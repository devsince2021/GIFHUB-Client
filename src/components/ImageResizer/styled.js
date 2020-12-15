import styled from 'styled-components';

export const ResizingBoard = styled.div` //app
  background-color: transparent;
  width: 100%;
  max-width: 500px;
  border: 2px solid blue;
  grid-column: 2/13;
  grid-row: 2/23;
  z-index: 2;
`;

export const ImageHolder = styled.div`
  position: absolute;
  background-color: transparent;
  width: 50px;
  height: 50px;
  top: 150px;
  left: 220px;
`;

export const Resizer = styled.div`
  position: absolute;
  width: 10%;
  height: 10%;
  z-index: 2;
`;

export const NorthWestPoint = styled(Resizer)`
  border-top: 3px solid blue;
  border-left: 3px solid blue;
  top: -1px;
  left: -1px;
  cursor: nw-resize;
`;

export const NorthEastPoint = styled(Resizer)`
  border-top: 3px solid blue;
  border-right: 3px solid blue;
  top: -1px;
  right: -1px;
  cursor: ne-resize;
`;

export const SouthWestPoint = styled(Resizer)`
  border-bottom: 3px solid blue;
  border-left: 3px solid blue;
  bottom: -1px;
  left: -1px;
  cursor: sw-resize;
`;

export const SouthEastPoint = styled(Resizer)`
  border-bottom: 3px solid blue;
  border-right: 3px solid blue;
  bottom: -1px;
  right: -1px;
  cursor: se-resize;
`;

