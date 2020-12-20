import { combineReducers } from 'redux';
import { reducerUtils } from '../utils';
import {
  SAVE_UPLOADED_FILE,
  SAVE_UPLOADED_FILE_SUCCESS,
  SAVE_UPLOADED_FILE_ERROR,
  DELETE_UPLOADED_FILE,
  SAVE_SELECTED_FILE,
  DELETE_SELECTED_FILE,
  GET_ALL_MEIDA_FILE,
  GET_ALL_MEIDA_FILE_SUCCESS,
  GET_ALL_MEIDA_FILE_ERROR,
} from '../constants/actionTypes';

const initialState = reducerUtils.initial();

const getAllMediaFile = (state = initialState, action) => {
  switch (action.type) {
    case   GET_ALL_MEIDA_FILE:
      return reducerUtils.loading();
    case GET_ALL_MEIDA_FILE_SUCCESS:
      return reducerUtils.success(action.payload);
    case GET_ALL_MEIDA_FILE_ERROR:
      return 'error';
    default:
      return state;
  }
};

const uploaded = (state = initialState, action) => {
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

const selected = (state = null, action) => {
  switch (action.type) {
    case SAVE_SELECTED_FILE:
      return action.payload;
    case DELETE_SELECTED_FILE:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  getAllMediaFile,
  selected,
  uploaded,
});
