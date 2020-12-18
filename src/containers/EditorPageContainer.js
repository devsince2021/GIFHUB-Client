import { connect } from 'react-redux';
import EditorPage from '../pages/EditorPage';
import { actionEditMediaFile, actionUploadMediaFile } from '../actions';

function mapStateToProps(state) {
  return {
    uploadedFile: state.uploadMediaFile.uploaded.data,
    selectedFile: state.uploadMediaFile.selected,
    currentEditingStep: state.editMediaFile.changeEditingStep,
    startTime: state.editMediaFile.saveStartTimeStamp,
    duration: state.editMediaFile.saveDurationStamp,
    imageSizeAndPosition: state.editMediaFile.saveImageSizeAndPosition,
    format: state.editMediaFile.saveFinalFileFormat,
    finalFile: state.editMediaFile.createFinalFile.data,
    isFinalFileLoading: state.editMediaFile.createFinalFile.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveStartTimeStamp: function(startTime) {
      dispatch(actionEditMediaFile.saveStartTimeStamp(startTime));
    },
    onSaveDurationStamp: function(duration) {
      dispatch(actionEditMediaFile.saveDurationStamp(duration));
    },
    onChangeEdtingStep: function(direction) {
      return direction === 'next'
        ? dispatch(actionEditMediaFile.nextEditingStep())
        : dispatch(actionEditMediaFile.previousEditingStep());
    },
    onSaveSeletedFile: function(mediaFile) {
      return dispatch(actionUploadMediaFile.saveSelectedFile(mediaFile));
    },
    onSaveImageSizeAndPosition: function(sizeAndPosition) {
      return dispatch(actionEditMediaFile.saveImageSizeAndPosition(sizeAndPosition))
    },
    onSaveFinalFileFormat: function(format) {
      return dispatch(actionEditMediaFile.saveFinalFileFormat(format));
    },
    onCreateFinalFile: function(options) {
      return dispatch(actionEditMediaFile.createFinalFile(options));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditorPage);
