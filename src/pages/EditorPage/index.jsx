import React, { useState, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import EditorHeader from '../../components/Header/EditorHeader';
import { EditorContent, VideoWrapper, ControllerWrapper } from './styled';
import {
  VideoTrimController,
  ImageAddController,
  FileConfirmController
} from '../../components/FileEditController';
import ImageResizer from '../../components/ImageResizer';
import FileCreateModal from '../../components/Modal/FileCreateModal';

export default function EditorPage({
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
}) {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const video = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isImageSubmitted, setIsImageSubmitted] = useState(false);

  function togglePlay(event) {
    const method = isPaused ? 'play' : 'pause';
    event.target[method]();
    setIsPaused(!isPaused);
  }

  function makeVideoLoop(event) {
    const endTime = startTime + duration + 1;
    if (currentEditingStep === 2) return event.target.play();
    if (!duration) event.target.pause();
    if (Math.round(event.target.currentTime) === endTime) {
      event.target.currentTime = startTime;
    }
  }

  function saveImageSizeAndPosition(sizeAndPosition) {
    onSaveImageSizeAndPosition(sizeAndPosition)
  }

  function toggleImageModification() {
    return currentEditingStep !== 2;
  }

  function loadEditedMediaFile() {
    console.log('click create button');
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
  }

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
            <source src={`http://localhost:4000/mediaFile/${uploadedFile?._id}`} type='video/mp4' />
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
            {/* <FileCreateModal
              title='Creating...'
            /> */}
          </Route>
        </ControllerWrapper>
      </EditorContent>
    </>
  );
}
