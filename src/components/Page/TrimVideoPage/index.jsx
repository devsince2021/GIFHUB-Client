import React, { useState, useRef } from 'react';
import EditorHeader from '../../Header/EditorHeader';
import { useHistory } from 'react-router-dom';
import {
  EditorContent,
  Description,
  VideoContainer,
  ControllerContainer,
  ControllerLabel,
  Controller,
} from './styled';

export default function TrimVideoPage({ uploadedFile }) {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const [isPaused, setIsPaused] = useState(true);
  const [video, setVideo] = useState(useRef(null));
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMouseUp, setIsMouseUp] = useState(true);

  function togglePlay(event) {
    const method = isPaused ? 'play' : 'pause';
    event.target[method]();
    setIsPaused(!isPaused);
  }

  function makeVideoLoop(event) {
    const endTime = startTime + duration
    if (!duration) event.target.pause();
    if (Math.round(event.target.currentTime) === endTime) {
      event.target.currentTime = startTime;
    }
  }

  function getTimeStamp(event) {
    if (event.type === 'mousemove' && isMouseUp) return;

    const timeStamp = Math.round((event.nativeEvent.offsetX / event.target.offsetWidth) * video.current.duration);
    setVideo(video => ({...video, ...video.current.currentTime = timeStamp }));
    event.target.className.includes('startTime')
      ? setStartTime(timeStamp)
      : setDuration(timeStamp);
  }

  function mouseUpAndDownHandler() {
    setIsMouseUp(!isMouseUp);
  }

  return(
    <>
      <EditorHeader />
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
            <source src={`http://localhost:4000/mediaFile?id=${uploadedFile._id}#t=3,5`} type='video/mp4' />
          </video>
        </VideoContainer>
        <ControllerContainer>
          <Description>
            Use the sliders to select Start Time and Duration.
          </Description>
          <ControllerLabel start>Strat Time</ControllerLabel>
          <Controller
            className='startTime'
            onClick={getTimeStamp}
            onMouseMove={getTimeStamp}
            onMouseUp={mouseUpAndDownHandler}
            onMouseDown={mouseUpAndDownHandler}
            start
          >

          </Controller>
          <ControllerLabel>Duration</ControllerLabel>
          <Controller
            onClick={getTimeStamp}
            onMouseMove={getTimeStamp}
            onMouseUp={mouseUpAndDownHandler}
            onMouseDown={mouseUpAndDownHandler}
          >

          </Controller>
        </ControllerContainer>
      </EditorContent>
    </>
  );
}
