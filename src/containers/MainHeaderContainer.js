import { connect } from 'react-redux';
import MainHeader from '../components/Header/MainHeader';
import {
  actionHandleMediaFile,
  actionModal,
} from '../actions';

const mapStateToProps = state => ({
  uploadedFile: state.handleMediaFile.uploaded.data,
  selectedFile: state.handleMediaFile.selected,
  isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
  currentEditingStep: state.editMediaFile.currentEditingStep,
  isLoading: state.handleMediaFile.uploaded.loading,
});

const mapDispathToProps = dispatch => ({
  onSaveUploadedFile: mediaFile => (
    dispatch(actionHandleMediaFile.saveUploadedFile(mediaFile))
  ),
  onSaveSeletedFile: mediaFile => (
    dispatch(actionHandleMediaFile.saveSelectedFile(mediaFile))
  ),
  onDeleteSelectedFile: () => (
    dispatch(actionHandleMediaFile.deleteSelectedFile())
  ),
  onToggleMediaFileModal: () => (
    dispatch(actionModal.toggleMediaFileModal())
  ),
});

export default connect(mapStateToProps,mapDispathToProps)(MainHeader);
