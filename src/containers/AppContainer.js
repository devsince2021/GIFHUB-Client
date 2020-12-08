import { connect } from 'react-redux';
import App from '../components/App';
import {saveFile} from '../action/mediaFileActions'

function mapStateToProps(state) {
  return {
    file: state.mediaFile.selectedMediaFile,
  }
}

function mapDispathToProps(dispatch) {
  return {
    saveFile: async function(formData) {
      const result = await saveFile(formData)
      return  dispatch(result);
    }
  };
}

export default connect(mapStateToProps,mapDispathToProps)(App);
