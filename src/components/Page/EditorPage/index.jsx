import React, { useState, useRef } from 'react';
import EditorHeader from '../../Header/EditorHeader';
import VideoTrimController from '../../VideoTrimController';
import { useHistory } from 'react-router-dom';
import { EditorContent, VideoContainer } from './styled';

export default function EditorPage({ uploadedFile, currentEditingStep }) {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const [video, setVideo] = useState(useRef(null));
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
        <VideoContainer>
          <video
            width='100%'
            height='100%'
            ref={video}
            onClick={togglePlay}
            onTimeUpdate={makeVideoLoop}
            controls
            autoPlay
          >
            <source src={`http://localhost:4000/mediaFile?id=${uploadedFile._id}`} type='video/mp4' />
          </video>
        </VideoContainer>
        <VideoTrimController
          video={video}
          setVideo={setVideo}
          startTime={startTime}
          setStartTime={setStartTime}
          duration={duration}
          setDuration={setDuration}
        />
      </EditorContent>
    </>
  );
}
