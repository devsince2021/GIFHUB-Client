import { combineReducers } from 'redux';
import uploadMediaFile from './uploadMediaFile';
import editMediaFile from './editMediaFile';
import modal from './modal';

export default combineReducers({
  editMediaFile,
  uploadMediaFile,
  modal,
});
