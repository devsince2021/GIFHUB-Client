import React from 'react';
import FileUploader from '../../FileUploader';
import { Description, Notification } from './styled';
import { DESCRIPTION, NOTIFICATION } from '../../../constants/modal';
import { validateFileSize } from '../../../utils';

export default function FileUploadContent({
  onSaveUploadedFile,
  onSaveSeletedFile,
  onDeleteSelectedFile,
  selectedFile,
}) {

  function validateAndSaveSelectedFile(file) {
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

    onSaveUploadedFile(mediaFile);
    onDeleteSelectedFile();
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
