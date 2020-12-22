import React from 'react';
import {
  Description,
  TimeRangeInputLabel,
  TimeRangeInputConatianer,
} from './styled';
import { TimeArrowInput, TimeRangeInput } from '../../Input';
import { NextButton } from '../../Button';

const VideoTrimController = ({
  video,
  startTime,
  onSaveStartTimeStamp,
  duration,
  onSaveDurationStamp,
  onChangeEdtingStep,
}) => {
  const getTimeStamp = event => {
    const timeStamp = Number(event.target.value);
    const stampType = event.target.name;
    video.current.play();

    if (stampType === 'startTime') {
      video.current.currentTime = timeStamp;
      onSaveStartTimeStamp(timeStamp);
      return;
    }
    video.current.currentTime = startTime;
    onSaveDurationStamp(timeStamp);
  };

  const nextButtonClickHandler = () => {
    onChangeEdtingStep('next');
  };

  return(
    <>
      <Description>
        Use the sliders to select Start Time and Duration.
      </Description>
      <TimeRangeInputLabel startTime>
        Start Time
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
      <NextButton
        position='next'
        to='/create/add-image'
        onClick={nextButtonClickHandler}
      >
        next
      </NextButton>
    </>
  );
};

export default VideoTrimController;
