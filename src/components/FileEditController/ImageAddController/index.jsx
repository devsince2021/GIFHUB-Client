import React, { useState, useEffect } from 'react';
import {
  Description,
  ControllerLabel,
  FileUploaderConatianer,
  Notification,
} from './styled';
import FileUploader from '../../FileUploader';
import { NextButton } from '../../Button';

const ImageAddController = ({
  onSaveSeletedFile,
  selectedFile,
  onChangeEdtingStep,
  setIsImageSubmitted,
}) => {
  const [placeholder , setPlaceholder] = useState('');

  useEffect(() => {
    selectedFile
    ? setPlaceholder(selectedFile.name.toLowerCase())
    : setPlaceholder('Select your images..');
  }, [selectedFile]);

  const saveSelectedFile = image => {
    onSaveSeletedFile(image);
  };

  const onImageSubmit = () => {
    setIsImageSubmitted(prev => !prev);
    setPlaceholder('Select your images..');
  };

  const nextButtonClickHandler = () => {
    onChangeEdtingStep('next');
  };

  return(
    <>
      <Description>
        Select your Image and put it where you want on the video!
      </Description>
      <ControllerLabel image>
        Select Images
      </ControllerLabel>
      <FileUploaderConatianer image>
        <FileUploader
          placeholder={placeholder}
          onChange={saveSelectedFile}
          selectedFile={selectedFile}
          onSubmit={onImageSubmit}
          image
        />
      </FileUploaderConatianer>
      <Notification image>
        Supported Formats: JPG, PNG
      </Notification>
      <NextButton
        position='next'
        to='/create/confirm'
        onClick={nextButtonClickHandler}
      >
        next
      </NextButton>
    </>
  );
};

export default ImageAddController;
