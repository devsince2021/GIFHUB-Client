import { mount } from 'enzyme';
import Root from '../../../Root';
import { MemoryRouter, Link } from 'react-router-dom';
import ImageAddController from '.';
import {
  Description,
  ControllerLabel,
  FileUploaderConatianer,
  Notification,
} from './styled';
import FileUploader from '../../FileUploader';
import { NextButton } from '../../Button';

describe('ImageAddController', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <MemoryRouter>
          <ImageAddController
          />
        </MemoryRouter>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render all components without trouble', () => {
    expect(wrapper.contains(Description)).toEqual(true);
    expect(wrapper.contains(ControllerLabel)).toEqual(true);
    expect(wrapper.contains(FileUploaderConatianer)).toEqual(true);
    expect(wrapper.contains(Notification)).toEqual(true);
    expect(wrapper.contains(FileUploader)).toEqual(true);
    expect(wrapper.contains(NextButton)).toEqual(true);
  });

  it('should redirect when click next button', () => {
    expect(wrapper.find(Link).props().to).toBe('/create/confirm');
  });
});
