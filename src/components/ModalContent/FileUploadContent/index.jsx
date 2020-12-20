import React from 'react';
import FileUploader from '../../FileUploader';
import { Description, Notification } from './styled';
import { DESCRIPTION, NOTIFICATION } from '../../../constants/modal';
import { validateFileSize } from '../../../utils';

const FileUploadContent = ({
  onSaveUploadedFile,
  onSaveSeletedFile,
  onDeleteSelectedFile,
  selectedFile,
}) => {
  const validateAndSaveSelectedFile = file => {
    if (!file) return;
      const isValidSize = validateFileSize(file);
    if (isValidSize) onSaveSeletedFile(file);
  };

  const inputPlaceholder = selectedFile
    ? selectedFile.name.toLowerCase()
    : 'Select your files..';

  const createFormDataAndSaveUploadedFile = async () => {
    const mediaFile = new FormData();
    mediaFile.append('mediaFile', selectedFile);
    onSaveUploadedFile(mediaFile);
    onDeleteSelectedFile();
  };

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
      video
    />
    <Notification>
      {NOTIFICATION}
    </Notification>
  </>
  );
};

export default FileUploadContent;
