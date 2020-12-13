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
