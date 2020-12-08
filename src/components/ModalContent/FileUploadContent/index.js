import React from 'react';
import FileUploader from '../../FileUploader';
import { Description, Notification } from './styled';
import { DESCRIPTION, NOTIFICATION } from '../../../constants/modal';

export default function FileUploadContent({onMediaFileSubmit}) {
return (
  <>
    <Description>
      {DESCRIPTION}
    </Description>
    <FileUploader onMediaFileSubmit={onMediaFileSubmit} />
    <Notification>
      {NOTIFICATION}
    </Notification>
  </>
  );
};
