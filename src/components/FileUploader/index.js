import React, { useRef, useState } from 'react';
import axios from 'axios';
import { FileSelectInput } from '../Input';
import { FileUploadIconButton } from '../Button';
import { FileUploadForm, FileSelectIcon, SelectedFileName } from './styled'
import { handleSelectedFileName, validateFileSize } from '../../utils';

export default function FileUploader({onMediaFileSubmit}) {
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
    const isValidSize = validateFileSize(file);
    if (isValidSize) setFile(file);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const mediaFile = new FormData();
    mediaFile.append('mediaFile', file );
    
    onMediaFileSubmit(mediaFile);
    setFile(null);
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
  );
};
