import React, { useState, useRef } from 'react';
import EditorHeader from '../../Header/EditorHeader';
import { useHistory } from 'react-router-dom';
import { TimeArrowInput, TimeRangeInput } from '../../Input';
import {
  EditorContent,
  Description,
  VideoContainer,
  ControllerContainer,
  TimeRangeInputLabel,
  TimeRangeInputConatianer,
} from './styled';

export default function TrimVideoPage({ uploadedFile }) {
  const history = useHistory();
  if (!uploadedFile) history.push('/');

  const [isPaused, setIsPaused] = useState(true);
  const [video, setVideo] = useState(useRef(null));
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function togglePlay(event) {
    const method = isPaused ? 'play' : 'pause';
    event.target[method]();
    setIsPaused(!isPaused);
  }

  console.log(startTime, 'startTime');
  console.log(duration, 'duration')

  function makeVideoLoop(event) {
    const endTime = startTime + duration + 1;
    if (!duration) event.target.pause();
    if (Math.round(event.target.currentTime) === endTime) {
      event.target.currentTime = startTime;
    }
  }

  function getTimeStamp(event) {
    const timeStamp = Number(event.target.value);
    const stampType = event.target.name;

    if (stampType === 'startTime') {
      setVideo(video => ({...video, ...video.current.currentTime = timeStamp }));
      setStartTime(timeStamp);
      video.current.play();
      return;
    }
    setVideo(video => ({...video, ...video.current.currentTime = startTime }));
    setDuration(timeStamp);
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
            autoPlay
          >
            <source src={`http://localhost:4000/mediaFile?id=${uploadedFile._id}`} type='video/mp4' />
          </video>
        </VideoContainer>
        <ControllerContainer>
          <Description>
            Use the sliders to select Start Time and Duration.
          </Description>
          <TimeRangeInputLabel start>
            Strat Time
          </TimeRangeInputLabel>
          <TimeRangeInputConatianer grid={`${Math.round(video.current?.duration)}`} startTime>
            <TimeRangeInput
              name='startTime'
              type='range'
              min='0'
              max={`${Math.round(video.current?.duration) - duration}`}
              step='1'
              onChange={getTimeStamp}
              column={`${Math.round(video.current?.duration) - duration}`}
              startTime
            />
          </TimeRangeInputConatianer>

          <TimeArrowInput
            name='startTime'
            type='number'
            min='0'
            max={`${Math.round(video.current?.duration) - duration}`}
            step='1'
            onChange={getTimeStamp}
            value={startTime}
            placeholder='s'
            startTime
          />
          <TimeRangeInputLabel>
            Duration
          </TimeRangeInputLabel>
          <TimeRangeInputConatianer grid={`${Math.round(video.current?.duration)}`}>
            <TimeRangeInput
              type='range'
              min='0'
              max={`${Math.round(video.current?.duration) - startTime}`}
              step='1'
              onChange={getTimeStamp}
              column={`${Math.round(video.current?.duration) - startTime}`}
            />
          </TimeRangeInputConatianer>
          <TimeArrowInput
            type='number'
            min='0'
            max={`${Math.round(video.current?.duration)}`}
            step='1'
            onChange={getTimeStamp}
            value={duration}
            placeholder='s'
          />
        </ControllerContainer>
      </EditorContent>
    </>
  );
}
