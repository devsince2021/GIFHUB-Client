import { connect } from 'react-redux';
import App from '../components/App';
import { actionHandleMediaFile } from '../actions';

const mapStateToProps = state => ({
  uploadedFile: state.handleMediaFile.uploaded.data,
  currentEditingStep: state.editMediaFile.changeEditingStep,
  mediaList: state.handleMediaFile.getAllMediaFile.data,
  isMediaListLoading: state.handleMediaFile.getAllMediaFile.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoadAllMediaFile: () => (dispatch(actionHandleMediaFile.getAllMediaFile()))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
