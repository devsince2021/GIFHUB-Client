import React, { useState, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import EditorHeader from '../../components/Header/EditorHeader';
import { EditorContent, VideoWrapper, ControllerWrapper } from './styled';
import { VideoTrimController } from '../../components/EditController';

export default function EditorPage({
  uploadedFile,
  currentEditingStep,
  onSaveStartTimeStamp,
  onSaveDurationStamp,
  startTime,
  duration,
}) {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const video = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

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
        <VideoWrapper>
          <video
            width='100%'
            height='100%'
            ref={video}
            onClick={togglePlay}
            onTimeUpdate={makeVideoLoop}
            muted
            autoPlay
            controls
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
            />
          </Route>
        </ControllerWrapper>
      </EditorContent>
    </>
  );
}
