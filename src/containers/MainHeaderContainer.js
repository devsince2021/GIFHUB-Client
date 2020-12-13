import { connect } from 'react-redux';
import MainHeader from '../components/Header/MainHeader';
import {
  actionMediaFile,
  actionModal,
  nextEditingStep,
  previousEditingStep
} from '../action';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded.data,
    selectedFile: state.mediaFile.selected,
    isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
    currentEditingStep: state.changeEditingStep,
    isLoading: state.mediaFile.uploaded.loading,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onSaveUploadedFile: function(mediaFile) {
      return dispatch(actionMediaFile.saveUploadedFile(mediaFile));
    },
    onSaveSeletedFile: function(mediaFile) {
      return dispatch(actionMediaFile.saveSelectedFile(mediaFile));
    },
    onDeleteSelectedFile: function() {
      return dispatch(actionMediaFile.deleteSelectedFile());
    },
    onToggleMediaFileModal: function() {
      return dispatch(actionModal.toggleMediaFileModal());
    },
    onChangeEdtingStep: function(direction) {
      return direction === 'next'
        ? dispatch(nextEditingStep())
        : dispatch(previousEditingStep());
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(MainHeader);
