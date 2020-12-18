import React from 'react';
import Modal from '..';
import { Title, Description, StyeldAnchor } from './styled';
import { CancelButton } from '../../Button';

export default function FileDownloadModal({
  isOpen,
  isLoading,
  onClick,
  downloadUrl,
}) {

  function generateTitle() {
    return isLoading ? 'Creating...' : 'Complete!'
  }

  isLoading=false;
  function generateDownloadForm() {
    return (
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
  }

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
        {generateTitle()}
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
}
