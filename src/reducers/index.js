import { combineReducers } from 'redux';
import mediaFile from './mediaFile';
import modal from './modal';
import { NEXT_EDITING_STEP, PREVIOUS_EDITING_STEP } from '../constants/actionTypes';

function changeEditingStep(state = 0, action) {
  switch (action.type) {
    case NEXT_EDITING_STEP:
      return state + 1;
    case PREVIOUS_EDITING_STEP:
      return state ? state - 1 : state;
    default:
      return state;
  }
};

export default combineReducers({
  changeEditingStep,
  mediaFile,
  modal,
});
