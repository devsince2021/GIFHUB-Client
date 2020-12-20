import { connect } from 'react-redux';
import MainHeader from '../components/Header/MainHeader';
import {
  actionHandleMediaFile,
  actionModal,
} from '../actions';

function mapStateToProps(state) {
  return {
    uploadedFile: state.handleMediaFile.uploaded.data,
    selectedFile: state.handleMediaFile.selected,
    isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
    currentEditingStep: state.editMediaFile.currentEditingStep,
    isLoading: state.handleMediaFile.uploaded.loading,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onSaveUploadedFile: function(mediaFile) {
      return dispatch(actionHandleMediaFile.saveUploadedFile(mediaFile));
    },
    onSaveSeletedFile: function(mediaFile) {
      return dispatch(actionHandleMediaFile.saveSelectedFile(mediaFile));
    },
    onDeleteSelectedFile: function() {
      return dispatch(actionHandleMediaFile.deleteSelectedFile());
    },
    onToggleMediaFileModal: function() {
      return dispatch(actionModal.toggleMediaFileModal());
    },
  };
}

export default connect(mapStateToProps,mapDispathToProps)(MainHeader);
