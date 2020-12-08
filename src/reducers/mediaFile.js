import { combineReducers } from 'redux';
import {
  SAVE_UPLOADED_FILE,
  SAVE_UPLOADED_FILE_SUCCESS,
  SAVE_UPLOADED_FILE_ERROR,
  SAVE_SELECTED_FILE,
  DELETE_SELECTED_FILE,
} from '../constants/actionTypes';

function uploaded(state = null, action) {
  switch (action.type) {
    case SAVE_UPLOADED_FILE:
      return 'start';
    case SAVE_UPLOADED_FILE_SUCCESS:
      return action.payload;
    case SAVE_UPLOADED_FILE_ERROR:
      return 'error';
    default:
      return state;
  }
};

function selected(state = null, action) {
  switch (action.type) {
    case SAVE_SELECTED_FILE:
      return action.payload;
    case DELETE_SELECTED_FILE:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  selected,
  uploaded,
});
