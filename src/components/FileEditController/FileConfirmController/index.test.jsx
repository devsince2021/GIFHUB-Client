import { mount } from 'enzyme';
import Root from '../../../Root';
import FileConfirmController from '.';
import { Description, ControllerLabel } from './styled';
import { EditFinishButton } from '../../Button';
import ToggleSlider from '../../ToggleSlider';

describe('FileConfirmController', () => {
  let uploadedFile;
  let wrapper;
  let count = 0;

  beforeEach(() => {
    uploadedFile = (count === 1)
      ? {content_type: 'video/quicktime'}
      : {content_type: 'video/mp4'};

    wrapper = mount(
      <Root>
        <FileConfirmController
          uploadedFile={uploadedFile}
        />
      </Root>
    );

    count++;
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render all components without trouble', () => {
    expect(wrapper.contains(Description)).toEqual(true);
    expect(wrapper.contains(ControllerLabel)).toEqual(true);
    expect(wrapper.contains(EditFinishButton)).toEqual(true);
    expect(wrapper.contains(ToggleSlider)).toEqual(true);
  });

  it('should show MOV format when the format of uploadedFile is quicktime ', () => {
    expect(wrapper.find(ControllerLabel).slice(1).text()).toContain('MOV');
  });

  it('should show MP4 format when the format of uploadedFile is mp4 ', () => {
    expect(wrapper.find(ControllerLabel).slice(1).text()).toContain('MP4');
  });
});
