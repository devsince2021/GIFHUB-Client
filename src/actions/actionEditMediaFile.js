import {
  NEXT_EDITING_STEP,
  PREVIOUS_EDITING_STEP,
  SAVE_START_TIME_STAMP,
  SAVE_DURATION_STAMP,
} from '../constants/actionTypes';

export function nextEditingStep() {
  return {
    type: NEXT_EDITING_STEP,
  };
};

export function previousEditingStep() {
  return {
    type: PREVIOUS_EDITING_STEP,
  }
}

export function saveStartTimeStamp(startTime) {
  return {
    type: SAVE_START_TIME_STAMP,
    payload: startTime,
  };
}

export function saveDurationStamp(duration) {
  return {
    type: SAVE_DURATION_STAMP,
    payload: duration,
  };
}
