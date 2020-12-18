import { combineReducers } from 'redux';
import { reducerUtils } from '../utils';
import {
  SAVE_UPLOADED_FILE,
  SAVE_UPLOADED_FILE_SUCCESS,
  SAVE_UPLOADED_FILE_ERROR,
  DELETE_UPLOADED_FILE,
  SAVE_SELECTED_FILE,
  DELETE_SELECTED_FILE,
} from '../constants/actionTypes';

const initialState = reducerUtils.initial();

function uploaded(state = initialState, action) {
  switch (action.type) {
    case SAVE_UPLOADED_FILE:
      return reducerUtils.loading();
    case SAVE_UPLOADED_FILE_SUCCESS:
      return reducerUtils.success(action.payload);
    case SAVE_UPLOADED_FILE_ERROR:
      return 'error';
    case DELETE_UPLOADED_FILE:
      return initialState;
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
