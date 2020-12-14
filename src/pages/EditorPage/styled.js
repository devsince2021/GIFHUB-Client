import styled from 'styled-components';

export const EditorContent = styled.div`
  padding-top: 100px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  grid-column: 2/13;
  grid-row: 2/23;
`;

export const ControllerWrapper = styled.div`
  grid-column: 14/24;
  grid-row: 3/21;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;
