import React from 'react';
import Modal from '..';
import { Title, Description, StyeldAnchor } from './styled';
import { CancelButton } from '../../Button';

const FileDownloadModal = ({
  isOpen,
  isLoading,
  onClick,
  downloadUrl,
}) => {
  console.log(downloadUrl, 'down');
  const generateDownloadForm = () => (
    <>
      <Description download>
        Please click the download button to get your file!!
      </Description>
      <StyeldAnchor
        href={downloadUrl}
        download
      >
        Download
      </StyeldAnchor>
      <CancelButton
        onClick={onClick}
      >
        cancel
      </CancelButton>
    </>
  );

  return(
    <Modal
      onCloseModal={onClick}
      isOpen={isOpen}
      width='40%'
      height='50%'
      top='27%'
      left='28%'
    >
      <Title>
        {isLoading ? 'Creating...' : 'Complete!'}
      </Title>
      {
        isLoading
        ?
          <Description>
            'We are creating your own file!!'
          </Description>
        : generateDownloadForm()
      }
    </Modal>
  );
};

export default FileDownloadModal;
