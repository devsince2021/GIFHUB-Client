import React from 'react';
import FileUploader from '../../FileUploader';
import { Description, Notification } from './styled';
import { DESCRIPTION, NOTIFICATION } from '../../../constants/modal';

export default function FileUploadContent() {
return (
  <>
    <Description>
      {DESCRIPTION}
    </Description>
    <FileUploader />
    <Notification>
      {NOTIFICATION}
    </Notification>
  </>
  );
};
