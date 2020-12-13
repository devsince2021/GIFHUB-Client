import { connect } from 'react-redux';
import TrimVideoPage from '../components/Page/TrimVideoPage';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded.data,
    selectedFile: state.mediaFile.selected,
    isMediaFileModalOpen: state.modal.isMediaFileModalOpen,
    currentEditingStep: state.changeEditingStep,
    isLoading: state.mediaFile.uploaded.loading,
  }
}

export default connect(mapStateToProps,null)(TrimVideoPage);
