import { combineReducers } from 'redux';

function selectedMediaFile(state = null, action) {
  switch (action.type) {
    case 'save_file':
      return action.payload;
    default:
    return state;
  }
};

export default combineReducers({
  selectedMediaFile,
});
