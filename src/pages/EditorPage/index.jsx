import React, { useState, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import EditorHeader from '../../components/Header/EditorHeader';
import { EditorContent, VideoWrapper, ControllerWrapper } from './styled';
import { VideoTrimController, ImageAddController } from '../../components/FileEditController';
import ImageResizer from '../../components/ImageResizer';

export default function EditorPage({
  uploadedFile,
  currentEditingStep,
  onSaveStartTimeStamp,
  onSaveDurationStamp,
  onChangeEdtingStep,
  startTime,
  duration,
  onSaveSeletedFile,
  selectedFile,
  onSaveImageSizeAndPosition,
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
    if (!duration) event.target.pause();
    if (Math.round(event.target.currentTime) === endTime) {
      event.target.currentTime = startTime;
    }
  }

  return(
    <>
      <EditorHeader currentEditingStep={currentEditingStep} />
      <EditorContent>
        {
         isImageSubmitted &&
         <ImageResizer
            onSaveImageSizeAndPosition={onSaveImageSizeAndPosition}
            imageFile={selectedFile}
          />
        }
        <VideoWrapper>
          <video
            width='100%'
            height='100%'
            ref={video}
            onClick={!currentEditingStep && togglePlay}
            onTimeUpdate={makeVideoLoop}
            muted
            autoPlay
          >
            <source src={`http://localhost:4000/mediaFile?id=${uploadedFile?._id}`} type='video/mp4' />
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
        </ControllerWrapper>
      </EditorContent>
    </>
  );
}
