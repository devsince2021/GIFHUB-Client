import {
  NEXT_EDITING_STEP,
  PREVIOUS_EDITING_STEP,
  SAVE_START_TIME_STAMP,
  SAVE_DURATION_STAMP,
  SAVE_IMAGE_SIZE_AND_POSITION,
  SAVE_FINAL_FILE_FORMAT,
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

export function saveImageSizeAndPosition(sizeAndPosition) {
  return {
    type: SAVE_IMAGE_SIZE_AND_POSITION,
    payload: sizeAndPosition,
  }
}

export function saveFinalFileFormat(format) {
  return {
    type: SAVE_FINAL_FILE_FORMAT,
    payload: format,
  }
}
