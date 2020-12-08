import { combineReducers } from 'redux';
import { UPLOAD_MEDIA_FILE, UPLOAD_MEDIA_FILE_SUCCESS, UPLOAD_MEDIA_FILE_ERROR} from '../constants/actionTypes';

function uploaded(state = null, action) {
  switch (action.type) {
    case UPLOAD_MEDIA_FILE:
      return 'start';
    case UPLOAD_MEDIA_FILE_SUCCESS:
      return action.payload;
    case UPLOAD_MEDIA_FILE_ERROR:
      return 'error';
    default:
      return state;
  }
};

export default combineReducers({
  uploaded,
});
