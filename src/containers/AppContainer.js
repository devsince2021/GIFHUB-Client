import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    uploadedFile: state.mediaFile.uploaded.data,
    currentEditingStep: state.changeEditingStep,
  }
}

export default connect(mapStateToProps,null)(App);
