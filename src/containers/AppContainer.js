import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    uploadedFile: state.uploadMediaFile.uploaded.data,
    currentEditingStep: state.editMediaFile.changeEditingStep,
  }
}

export default connect(mapStateToProps,null)(App);
