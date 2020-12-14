import React, { useRef } from 'react';
import { FileSelectInput } from '../Input';
import { FileUploadIconButton } from '../Button';
import { FileUploadForm, FileSelectIcon, SelectedFileName } from './styled'
import { handleSelectedFileName } from '../../utils';

export default function FileUploader({
  onSubmit,
  onChange,
  selectedFile,
  placeholder,
}) {
  const fileSelectInput = useRef(null);

  function clickHandler() {
    fileSelectInput.current.click();
  }

  function changeHandler(event) {
    onChange(event.target.files[0]);
  }

  async function submitHandler(event) {
    event.preventDefault();
    onSubmit();
  }

return (
  <FileUploadForm onSubmit={submitHandler}>
    <FileSelectInput
      ref={fileSelectInput}
      type='file'
      name='mediaFile'
      accept='.mov, .mp4, .gif, .png'
      onChange={changeHandler}
    />
    <FileSelectIcon onClick={clickHandler} />
    {handleSelectedFileName(SelectedFileName, placeholder)}
    <FileUploadIconButton disabled={!selectedFile} />
  </FileUploadForm>
  );
};
