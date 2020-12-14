import React from 'react';
import {
  Description,
  TimeRangeInputLabel,
  TimeRangeInputConatianer,
} from './styled';
import { TimeArrowInput, TimeRangeInput } from '../../Input';
import { NextStepButton } from '../../Button';

export default function VideoTrimController({
  video,
  startTime,
  onSaveStartTimeStamp,
  duration,
  onSaveDurationStamp
}) {
  function getTimeStamp(event) {
    const timeStamp = Number(event.target.value);
    const stampType = event.target.name;

    if (stampType === 'startTime') {
      video.current.currentTime = timeStamp;
      onSaveStartTimeStamp(timeStamp);
      video.current.play();
      return;
    }
    video.current.currentTime = startTime;
    onSaveDurationStamp(timeStamp);
  }

  return(
    <>
      <Description>
        Use the sliders to select Start Time and Duration.
      </Description>
      <TimeRangeInputLabel startTime>
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
        max={`${Math.round(video.current?.duration) - startTime}`}
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
    </>
  );
}
