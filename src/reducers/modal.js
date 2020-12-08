import { combineReducers } from 'redux';
import { TOGGLE_MEDIA_FILE_MODAL } from '../constants/actionTypes';

function isMediaFileModalOpen(state = false, action) {
  switch (action.type) {
    case TOGGLE_MEDIA_FILE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  isMediaFileModalOpen,
});
