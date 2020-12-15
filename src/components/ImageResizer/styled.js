import styled from 'styled-components';

export const ResizingBoard = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 500px;
  grid-column: 2/13;
  grid-row: 2/23;
  z-index: 2;
`;

export const ImageHolder = styled.div`
  position: absolute;
  background-color: transparent;
  background-image: ${({ url }) => `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  top: 350px;
  left: 250px;
`;

export const Resizer = styled.div`
  position: absolute;
  width: 10%;
  height: 10%;
  z-index: 2;
`;

export const NorthWestPoint = styled(Resizer)`
  border-top: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  border-left: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  top: -1px;
  left: -1px;
  cursor: nw-resize;
`;

export const NorthEastPoint = styled(Resizer)`
  border-top: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  border-right: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  top: -1px;
  right: -1px;
  cursor: ne-resize;
`;

export const SouthWestPoint = styled(Resizer)`
  border-bottom: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  border-left: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  bottom: -1px;
  left: -1px;
  cursor: sw-resize;
`;

export const SouthEastPoint = styled(Resizer)`
  border-bottom: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  border-right: ${({ theme }) => `3px solid ${theme.palette.ORANGE}`};
  bottom: -1px;
  right: -1px;
  cursor: se-resize;
`;

