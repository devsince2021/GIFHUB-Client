import styled from 'styled-components';
import { background, logo } from '../../constants/image';

export const Wrapper = styled.div`
  position: fixed;
  background-image: url(${background.appHeader});
  background-size: cover;
  padding: 1em 0;
  width: 100%;
  height: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin-left: 17.5em;
    width: 80em;
    display: grid;
    grid-template-columns: 5fr 1fr 1fr 1fr;
    grid-gap: 1em;
  }
`;

export const LogoContainer = styled.div`
  background-image: url(${logo.main});
  background-size: contain;
  background-repeat: no-repeat;
  width: 40em;
  height: 100em;
  margin-bottom: 0.5em;
`;

export const WackyContainer = styled.div`
  position: absolute;
  background-image: url(${logo.wacky});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25em;
  height: 25em;
  left: -5em;
  bottom: -9em;
`;
