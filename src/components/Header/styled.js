import styled, { css } from 'styled-components';
import { background } from '../../constants/image';

export const Wrapper = styled.div`
  background-image: ${({ simple }) => simple ? 'none' : `url(${background.MAIN_HEADER})`};
  position: fixed;
  background-color: ${({ theme })=> theme.palette.BLACK};
  width: 100%;
  max-width: 1200px;
  height: ${({ simple }) => simple ? '100px' : '140px'};
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: repeat(3,1fr);

  ${({ simple }) =>
    simple ||
    css`
      background-size: contain;
      background-repeat: repeat;
    `};
`;
