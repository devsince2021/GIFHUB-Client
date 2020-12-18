import { apiMediaFile as api } from '../api';
import { createPromiseThunk } from '../utils';
import {
  SAVE_UPLOADED_FILE,
  SAVE_SELECTED_FILE,
  DELETE_SELECTED_FILE,
  DELETE_UPLOADED_FILE,
} from '../constants/actionTypes';

export const saveUploadedFile = createPromiseThunk(SAVE_UPLOADED_FILE, api.uploadMediaFile);

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
