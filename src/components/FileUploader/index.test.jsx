import React, { useRef } from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import FileUploader from '.';

import { FileSelectInput } from '../Input';
import { FileUploadIconButton } from '../Button';
import { FileUploadForm, FileSelectIcon } from './styled';

describe('FileUploader', () => {
  const mockFn = jest.fn();

  const wrapper = mount(
      <Root>
        <FileUploader
          placeholder='Select'
          onSubmit={mockFn}
        />
      </Root>
    );

  it('should render all components without trouble', () => {
    expect(wrapper.contains(FileSelectInput)).toEqual(true);
    expect(wrapper.contains(FileUploadIconButton)).toEqual(true);
    expect(wrapper.contains(FileUploadForm)).toEqual(true);
    expect(wrapper.contains(FileSelectIcon)).toEqual(true);
  });

  it('should trigger onSumbit function when form submitted', () => {
    wrapper.find(FileUploadForm).simulate('submit');
    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
