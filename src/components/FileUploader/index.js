import React, { useRef, useState } from 'react';
import { FileSelectInput } from '../Input';
import { FileUploadIconButton } from '../Button'
import { FileUploadForm, FileSelectIcon, SelectedFileName } from './styled'
import handleSelectedFileName from '../../util/handleSelectedFileName';

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const fileSelectInput = useRef(null);

  const description = file
    ? file.name.toLowerCase()
    : 'Select your files..';

  function clickHandler() {
    fileSelectInput.current.click();
  }

  function changeHandler(event) {
    const file = event.target.files[0];
    setFile(file);
  }

  function submitHandler(event) {
    event.preventDefault();

    const mediaFile = new FormData();
    mediaFile.append('mediaFile', file );

    sendUserFile();
    setFile(null);

    async function sendUserFile() {
      const response =  await fetch('http://www.localhost:4000/mediaFile', {
        method: 'POST',
        enctype: 'multipart/form-data',
        body: mediaFile
      });
    }
  }

return (
    <FileUploadForm onSubmit={submitHandler}>
      <FileSelectInput
        ref={fileSelectInput}
        type='file'
        name='mediaFile'
        accept='.mov, .mp4, .gif'
        onChange={changeHandler}
      />
      <FileSelectIcon onClick={clickHandler} />
      {handleSelectedFileName(SelectedFileName, description)}
      <FileUploadIconButton disabled={!file}/>
    </FileUploadForm>
  )
};
