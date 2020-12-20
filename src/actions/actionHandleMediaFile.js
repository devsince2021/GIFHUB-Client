import { apiMediaFile as api } from '../api';
import { createPromiseThunk } from '../utils';
import {
  SAVE_UPLOADED_FILE,
  SAVE_SELECTED_FILE,
  DELETE_SELECTED_FILE,
  DELETE_UPLOADED_FILE,
  GET_ALL_MEIDA_FILE,
} from '../constants/actionTypes';

export const saveUploadedFile = createPromiseThunk(SAVE_UPLOADED_FILE, api.uploadMediaFile);
export const getAllMediaFile = createPromiseThunk(GET_ALL_MEIDA_FILE, api.getAllMediaFile);

export const deleteUploadedFile = function() {
  return {
    type: DELETE_UPLOADED_FILE,
  };
};

export const saveSelectedFile = function(payload) {
  return {
    type: SAVE_SELECTED_FILE,
    payload,
  };
};

export const deleteSelectedFile = function() {
  return {
    type: DELETE_SELECTED_FILE,
  };
}
