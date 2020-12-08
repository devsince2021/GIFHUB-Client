import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import { actionMediaFile } from '../action';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded,
    selectedFile: state.mediaFile.selected,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onSaveUploadedFile: function(mediaFile) {
      dispatch(actionMediaFile.saveUploadedFile(mediaFile));
      dispatch(actionMediaFile.deleteSelectedFile());
      return;
    },
    onSaveSeletedFile: function(mediaFile) {
      return dispatch(actionMediaFile.saveSelectedFile(mediaFile));
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(AppHeader);
