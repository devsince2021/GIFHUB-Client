import styled from 'styled-components';

export const EditorContent = styled.div`
  padding-top: 100px;
  height: 100vh;
  border: 1px solid pink;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`;

export const VideoContainer = styled.div`
  border: 1px solid yellow;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  grid-column: 2/13;
  grid-row: 2/23;
`;

export const ControllerContainer = styled.div`
  border: 1px solid aqua;
  grid-column: 14/24;
  grid-row: 2/20;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const Description = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  grid-column: 1/13;
  grid-row: 2/3;
`;

export const TimeRangeInputConatianer = styled.div`
  background-image: linear-gradient(to right, tomato, orange, yellow);
  align-self: center;
  height: 70%;
  border-radius: 3px;
  grid-column: 2/12;
  grid-row: ${({ startTime }) => startTime ? '5/6' : '9/10'};
  margin: 0 0;
  display: grid;
  grid-template-columns: repeat(${({ grid }) => grid - 1}, 1fr);

`;

export const TimeRangeInputLabel = styled.div`
  font-size: ${({ theme, second }) => second ? theme.fontSize.SMALL : '1rem'};
  border: 1px solid pink;
  width: ${({ width }) => `${100 * width}%`};
  grid-column: ${({ second }) => second ? '8/11' : '2/5'};
  grid-row: ${({ start }) => start ? '4/5' : '8/9'};
`;
