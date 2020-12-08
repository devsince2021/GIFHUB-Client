import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import { actionMediaFile } from '../action';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded,
  }
}

function mapDispathToProps(dispatch) {
  return {
    uploadFile: function(mediaFile) {
      return dispatch(actionMediaFile.upload(mediaFile));
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(AppHeader);
