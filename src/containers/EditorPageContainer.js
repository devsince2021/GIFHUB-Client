import { connect } from 'react-redux';
import EditorPage from '../pages/EditorPage';
import { actionEditMediaFile, actionHandleMediaFile } from '../actions';

const mapStateToProps = state => ({
  uploadedFile: state.handleMediaFile.uploaded.data,
  selectedFile: state.handleMediaFile.selected,
  currentEditingStep: state.editMediaFile.changeEditingStep,
  startTime: state.editMediaFile.saveStartTimeStamp,
  duration: state.editMediaFile.saveDurationStamp,
  imageSizeAndPosition: state.editMediaFile.saveImageSizeAndPosition,
  format: state.editMediaFile.saveFinalFileFormat,
  finalFile: state.editMediaFile.createFinalFile.data,
  isFinalFileLoading: state.editMediaFile.createFinalFile.loading,
});

const mapDispatchToProps = dispatch => ({
  onSaveStartTimeStamp: startTime => (
    dispatch(actionEditMediaFile.saveStartTimeStamp(startTime))
  ),
  onSaveDurationStamp: duration => (
    dispatch(actionEditMediaFile.saveDurationStamp(duration))
  ),
  onChangeEdtingStep: direction => (
    (direction === 'next')
      ? dispatch(actionEditMediaFile.nextEditingStep())
      : dispatch(actionEditMediaFile.previousEditingStep())
  ),
  onSaveSeletedFile: mediaFile => (
    dispatch(actionHandleMediaFile.saveSelectedFile(mediaFile))
  ),
  onSaveImageSizeAndPosition: sizeAndPosition => (
    dispatch(actionEditMediaFile.saveImageSizeAndPosition(sizeAndPosition))
  ),
  onSaveFinalFileFormat: format => (
    dispatch(actionEditMediaFile.saveFinalFileFormat(format))
  ),
  onCreateFinalFile: options => (
    dispatch(actionEditMediaFile.createFinalFile(options))
  ),
  onInitialize: () => {
    dispatch(actionHandleMediaFile.deleteSelectedFile());
    dispatch(actionHandleMediaFile.deleteUploadedFile());
    dispatch(actionEditMediaFile.deleteFinalFile());
    dispatch(actionEditMediaFile.initImageSizeAndPosition());
    dispatch(actionEditMediaFile.initDurationStamp());
    dispatch(actionEditMediaFile.initStartTimepStamp());
    dispatch(actionEditMediaFile.initEditingStep());
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(EditorPage);
