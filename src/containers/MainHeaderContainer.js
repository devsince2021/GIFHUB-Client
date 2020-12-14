import { connect } from 'react-redux';
import MainHeader from '../components/Header/MainHeader';
import {
  actionUploadMediaFile,
  actionModal,
  actionEditMediaFile,
} from '../actions';

function mapStateToProps(state) {
  return {
    uploadedFile: state.uploadMediaFile.uploaded.data,
    selectedFile: state.uploadMediaFile.selected,
    isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
    currentEditingStep: state.editMediaFile.currentEditingStep,
    isLoading: state.uploadMediaFile.uploaded.loading,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onSaveUploadedFile: function(mediaFile) {
      return dispatch(actionUploadMediaFile.saveUploadedFile(mediaFile));
    },
    onSaveSeletedFile: function(mediaFile) {
      return dispatch(actionUploadMediaFile.saveSelectedFile(mediaFile));
    },
    onDeleteSelectedFile: function() {
      return dispatch(actionUploadMediaFile.deleteSelectedFile());
    },
    onToggleMediaFileModal: function() {
      return dispatch(actionModal.toggleMediaFileModal());
    },
    onChangeEdtingStep: function(direction) {
      return direction === 'next'
        ? dispatch(actionEditMediaFile.nextEditingStep())
        : dispatch(actionEditMediaFile.previousEditingStep());
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(MainHeader);
