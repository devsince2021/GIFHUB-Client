import { connect } from 'react-redux';
import EditorPage from '../pages/EditorPage';
import { actionEditMediaFile } from '../actions';

function mapStateToProps(state) {
  return {
    uploadedFile: state.uploadMediaFile.uploaded.data,
    currentEditingStep: state.editMediaFile.changeEditingStep,
    startTime: state.editMediaFile.saveStartTimeStamp,
    duration: state.editMediaFile.saveDurationStamp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveStartTimeStamp: function(startTime) {
      dispatch(actionEditMediaFile.saveStartTimeStamp(startTime));
    },
    onSaveDurationStamp: function(duration) {
      dispatch(actionEditMediaFile.saveDurationStamp(duration));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditorPage);
