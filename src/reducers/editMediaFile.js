import { combineReducers } from 'redux';
import { reducerUtils } from '../utils';
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
  CREATE_FINAL_FILE_SUCCESS,
  CREATE_FINAL_FILE_ERROR,
  DELETE_FINAL_FILE,
} from '../constants/actionTypes';

function changeEditingStep(state = 0, action) {
  switch (action.type) {
    case NEXT_EDITING_STEP:
      return state + 1;
    case PREVIOUS_EDITING_STEP:
      return state ? state - 1 : state;
    case INIT_EDITING_STEP:
      return 0;
    default:
      return state;
  }
};

function saveStartTimeStamp(state = 0, action) {
  switch (action.type) {
    case SAVE_START_TIME_STAMP:
      console.log(action.payload, 'in reudever')
      return action.payload;
    case INIT_START_TIME_STAMP:
      return 0;
    default:
      return state;
  }
}

function saveDurationStamp(state = 0, action) {
  switch (action.type) {
    case SAVE_DURATION_STAMP:
      return action.payload;
    case INIT_DURATION_STAMP:
      return 0;
    default:
      return state;
  }
}

const initSizeAndPosition = {
  left: `${250 - 52}`,
  top: `${350 - 128}`,
  width: '50',
  height: '50',
};

function saveImageSizeAndPosition(state = initSizeAndPosition, action) {
  switch (action.type) {
    case SAVE_IMAGE_SIZE_AND_POSITION:
      return {...action.payload};
    case INIT_IMAGE_SIZE_AND_POSITION:
      return initialState;
    default:
      return state;
  }
}

function saveFinalFileFormat(state = 'gif', action) {
  switch(action.type) {
    case SAVE_FINAL_FILE_FORMAT:
      return action.payload;
    default:
      return state;
  }
}

const initialState = reducerUtils.initial();

function createFinalFile(state = initialState, action) {
  switch(action.type) {
    case CREATE_FINAL_FILE:
      return reducerUtils.loading();
    case CREATE_FINAL_FILE_SUCCESS:
      return reducerUtils.success(action.payload);
    case CREATE_FINAL_FILE_ERROR:
      return 'error';
    case DELETE_FINAL_FILE:
      return initialState;
    default:
      return state;
  }
}

export default combineReducers({
  saveFinalFileFormat,
  changeEditingStep,
  saveStartTimeStamp,
  saveDurationStamp,
  saveImageSizeAndPosition,
  createFinalFile,
});
