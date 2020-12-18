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
  video,
}) {
  const fileSelectInput = useRef(null);
  const accept = video ? '.mov, .mp4, .gif' : '.png, .jpg';

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
  <FileUploadForm
    onSubmit={submitHandler}
    video={!!video}
  >
    <FileSelectInput
      ref={fileSelectInput}
      type='file'
      name={video ? 'mediaFile' : 'image'}
      accept={accept}
      onChange={changeHandler}
    />
    <FileSelectIcon onClick={clickHandler} />
    {handleSelectedFileName(SelectedFileName, placeholder)}
    <FileUploadIconButton disabled={!selectedFile} />
  </FileUploadForm>
  );
};
