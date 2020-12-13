import React from 'react';
import {
  Wrapper,
  Description,
  TimeRangeInputLabel,
  TimeRangeInputConatianer,
} from './styled';
import { TimeArrowInput, TimeRangeInput } from '../Input';

export default function VideoTrimController({ video, setVideo, startTime, setStartTime, duration, setDuration }) {

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
    <Wrapper>
      <Description>
        Use the sliders to select Start Time and Duration.
      </Description>
      <TimeRangeInputLabel start>
          Strat Time
      </TimeRangeInputLabel>
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
      <TimeRangeInputLabel>
          Duration
      </TimeRangeInputLabel>
      <TimeArrowInput
        type='number'
        min='0'
        max={`${Math.round(video.current?.duration)}`}
        step='1'
        onChange={getTimeStamp}
        value={duration}
      />
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
    </Wrapper>
  );
}
