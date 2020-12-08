import React from 'react';
import AppHeader from '../AppHeader';

export default function App({ file, saveFile }) {

  console.log(file, 'saved state')
  // console.log(saveFile('test'), 'app container');
  // console.log(saveFile('test'), 'app container');
  return (
    <>
      <AppHeader onMediaFileSubmit={saveFile}></AppHeader>
    </>
  );
};
