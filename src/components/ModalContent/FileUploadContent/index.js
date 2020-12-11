import React from 'react';
import FileUploader from '../../FileUploader';
import { Description, Notification } from './styled';
import { DESCRIPTION, NOTIFICATION } from '../../../constants/modal';
import { validateFileSize } from '../../../utils';

export default function FileUploadContent({
  onSaveUploadedFile,
  onSaveSeletedFile,
  onDeleteSelectedFile,
  onChangeEdtingStep,
  selectedFile,
}) {

  function validateAndSaveSelectedFile(file) {
    console.log(file, 'input')
    if (!file) return;
    const isValidSize = validateFileSize(file);
    if (isValidSize) onSaveSeletedFile(file);
  }

  const inputPlaceholder = selectedFile
    ? selectedFile.name.toLowerCase()
    : 'Select your files..';

  async function createFormDataAndSaveUploadedFile() {
    const mediaFile = new FormData();
    mediaFile.append('mediaFile', selectedFile);

    await onSaveUploadedFile(mediaFile);
    onDeleteSelectedFile();
    onChangeEdtingStep('next');
    if (selectedFile.type.includes('image')) {
      onChangeEdtingStep('next');
    }
  }

return (
  <>
    <Description>
      {DESCRIPTION}
    </Description>
    <FileUploader
      onSubmit={createFormDataAndSaveUploadedFile}
      onChange={validateAndSaveSelectedFile}
      selectedFile={selectedFile}
      placeholder={inputPlaceholder}
    />
    <Notification>
      {NOTIFICATION}
    </Notification>
  </>
  );
};
