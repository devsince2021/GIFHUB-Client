import React, { useRef } from 'react';
import { FileSelectInput } from '../Input';
import { FileUploadIconButton } from '../Button';
import { FileUploadForm, FileSelectIcon, SelectedFileName } from './styled';
import { handleSelectedFileName } from '../../utils';

const FileUploader = ({
  onSubmit,
  onChange,
  selectedFile,
  placeholder,
  video,
}) => {
  const fileSelectInput = useRef(null);
  const accept = video ? '.mov, .mp4, .gif' : '.png, .jpg';

  const clickHandler = () => {
    fileSelectInput.current.click();
  };

  const changeHandler = event => {
    onChange(event.target.files[0]);
  };

  const submitHandler = async event => {
    event.preventDefault();
    onSubmit();
  };

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

export default FileUploader;
