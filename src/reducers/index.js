import { combineReducers } from 'redux';
import handleMediaFile from './handleMediaFile';
import editMediaFile from './editMediaFile';
import modal from './modal';

export default combineReducers({
  editMediaFile,
  handleMediaFile,
  modal,
});
