import React, { useState, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import EditorHeader from '../../components/Header/EditorHeader';
import { EditorContent, VideoWrapper, ControllerWrapper } from './styled';
import { SERVER_URL } from '../constants/http';
import {
  VideoTrimController,
  ImageAddController,
  FileConfirmController
} from '../../components/FileEditController';
import ImageResizer from '../../components/ImageResizer';
import FileDownloadModal from '../../components/Modal/FileDownloadModal';

const EditorPage = ({
  onSaveStartTimeStamp,
  onSaveDurationStamp,
  onChangeEdtingStep,
  onSaveSeletedFile,
  onSaveImageSizeAndPosition,
  onSaveFinalFileFormat,
  onCreateFinalFile,
  uploadedFile,
  currentEditingStep,
  startTime,
  duration,
  selectedFile,
  imageSizeAndPosition,
  format,
  isFinalFileLoading,
  finalFile,
  onInitialize,
}) => {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const video = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isImageSubmitted, setIsImageSubmitted] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const togglePlay = event => {
    const method = isPaused ? 'play' : 'pause';
    event.target[method]();
    setIsPaused(!isPaused);
  };

  const makeVideoLoop = event => {
    const endTime = startTime + duration + 1;
    if (!duration) event.target.pause();
    if (Math.round(event.target.currentTime) === endTime) {
      event.target.currentTime = startTime;
      event.target.play();
    }
  };

  const saveImageSizeAndPosition = sizeAndPosition => {
    onSaveImageSizeAndPosition(sizeAndPosition);
  };

  const toggleImageModification = () => (
    currentEditingStep !== 2
  );

  const loadEditedMediaFile = () => {
    const imageFile = new FormData();
    imageFile.append('image', selectedFile);

    const options = {
      imageFile,
      uploadedFile,
      startTime,
      duration,
      imageSizeAndPosition,
      format
    };
    onCreateFinalFile(options);
    setIsDownloadModalOpen(!isDownloadModalOpen);
  };

  const handleClickDownloadModalButton = () => {
    const result = window.confirm('Do you want leave?');
    if (!result) return;
    onInitialize();
    setIsDownloadModalOpen(!isFinalFileLoading);
    history.push('/');
  };

  return(
    <>
      <EditorHeader currentEditingStep={currentEditingStep} />
      <EditorContent>
        {
         isImageSubmitted &&
         <ImageResizer
            onMouseUp={saveImageSizeAndPosition}
            imageFile={selectedFile}
            onToggleResizer={toggleImageModification}
          />
        }
        <VideoWrapper>
          <video
            width='100%'
            height='100%'
            ref={video}
            onClick={!currentEditingStep ? togglePlay : undefined}
            onTimeUpdate={makeVideoLoop}
            muted
            autoPlay
          >
            <source src={`${SERVER_URL}/mediaFile/${uploadedFile?._id}`} type='video/mp4' />
          </video>
        </VideoWrapper>
        <ControllerWrapper>
          <Route path='/create/trim-video'>
            <VideoTrimController
              video={video}
              startTime={startTime}
              onSaveStartTimeStamp={onSaveStartTimeStamp}
              duration={duration}
              onSaveDurationStamp={onSaveDurationStamp}
              onChangeEdtingStep={onChangeEdtingStep}
            />
          </Route>
          <Route path='/create/add-image'>
            <ImageAddController
              onSaveSeletedFile={onSaveSeletedFile}
              selectedFile={selectedFile}
              onChangeEdtingStep={onChangeEdtingStep}
              setIsImageSubmitted={setIsImageSubmitted}
            />
          </Route>
          <Route path='/create/confirm'>
            <FileConfirmController
              uploadedFile={uploadedFile}
              onSaveFinalFileFormat={onSaveFinalFileFormat}
              onClick={loadEditedMediaFile}
            />
            <FileDownloadModal
              isLoading={isFinalFileLoading}
              isOpen={isDownloadModalOpen}
              onClick={handleClickDownloadModalButton}
              downloadUrl={finalFile?.location}
            />
          </Route>
        </ControllerWrapper>
      </EditorContent>
    </>
  );
};

export default EditorPage;
