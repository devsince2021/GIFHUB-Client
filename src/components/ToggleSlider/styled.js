import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: gray;
  height: 110%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Left = styled.div`
  background-color: ${({ theme, clicked }) => clicked ? theme.palette.ORANGE : 'gray'};
  transition: all 0.3s ease;
  text-align: center;
  padding: 8px 5px 8px 5px;
  border-radius: 4px 0 0 4px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Right = styled.div`
  background-color: ${({ theme, clicked }) => !clicked ? theme.palette.ORANGE : 'gray'};
  transition: all 0.3s ease;
  padding-top: 8px;
  text-align: center;
  border-radius: 0 4px 4px 0;
  font-size: 0.8rem;
  cursor: pointer;
`;
