import { connect } from 'react-redux';
import MainPage from '../pages/MainPage';
import { actionHandleMediaFile } from '../actions';

const mapStateToProps = state => ({
  mediaFileList: state.handleMediaFile.getAllMediaFile.data,
  isMediaListLoading: state.handleMediaFile.getAllMediaFile.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoadMediaFile: () => (
    dispatch(actionHandleMediaFile.getAllMediaFile())
  ),
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
