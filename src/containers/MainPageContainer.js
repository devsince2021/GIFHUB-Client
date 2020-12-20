import { connect } from 'react-redux';
import MainPage from '../pages/MainPage';
import { actionHandleMediaFile } from '../actions';

function mapStateToProps(state) {
  return {
    mediaFileList: state.handleMediaFile.getAllMediaFile.data,
    isMediaListLoading: state.handleMediaFile.getAllMediaFile.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadMediaFile: function() {
      return dispatch(actionHandleMediaFile.getAllMediaFile());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
