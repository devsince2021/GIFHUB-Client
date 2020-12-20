import {
  NEXT_EDITING_STEP,
  PREVIOUS_EDITING_STEP,
  INIT_EDITING_STEP,
  SAVE_START_TIME_STAMP,
  INIT_START_TIME_STAMP,
  SAVE_DURATION_STAMP,
  INIT_DURATION_STAMP,
  SAVE_IMAGE_SIZE_AND_POSITION,
  INIT_IMAGE_SIZE_AND_POSITION,
  SAVE_FINAL_FILE_FORMAT,
  CREATE_FINAL_FILE,
  DELETE_FINAL_FILE,
} from '../constants/actionTypes';
import { createPromiseThunk } from '../utils';
import { apiMediaFile as api } from '../api';

export const createFinalFile = createPromiseThunk(CREATE_FINAL_FILE, api.createFinalFile);

export const nextEditingStep = () => ({
  type: NEXT_EDITING_STEP,
});

export const previousEditingStep = () => ({
  type: PREVIOUS_EDITING_STEP,
});

export const initEditingStep = () => ({
  type: INIT_EDITING_STEP,
});

export const saveStartTimeStamp = startTime => ({
  type: SAVE_START_TIME_STAMP,
  payload: startTime,
});

export const initStartTimepStamp = () => ({
  type: INIT_START_TIME_STAMP,
});

export const saveDurationStamp = duration => ({
  type: SAVE_DURATION_STAMP,
  payload: duration,
});

export const initDurationStamp = () => ({
  type: INIT_DURATION_STAMP,
});

export const saveImageSizeAndPosition = sizeAndPosition => ({
  type: SAVE_IMAGE_SIZE_AND_POSITION,
  payload: sizeAndPosition,
});

export const initImageSizeAndPosition = () => ({
  type: INIT_IMAGE_SIZE_AND_POSITION,
});

export const saveFinalFileFormat = format => ({
  type: SAVE_FINAL_FILE_FORMAT,
  payload: format,
});

export const deleteFinalFile = () => ({
  type: DELETE_FINAL_FILE,
});
