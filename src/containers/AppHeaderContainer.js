import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import { actionMediaFile, actionModal } from '../action';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded,
    selectedFile: state.mediaFile.selected,
    isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
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
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(AppHeader);
