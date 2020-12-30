import React from 'react';
import { mount } from 'enzyme';
import Root from '../../../Root';
import { MemoryRouter, Link } from 'react-router-dom';
import VideoTrimController from '.';
import {
  Description,
  TimeRangeInputLabel,
  TimeRangeInputConatianer,
} from './styled';
import { TimeArrowInput, TimeRangeInput } from '../../Input';
import { NextButton } from '../../Button';

describe('VideoTrimController', () => {
  let wrapper;
  let useRefSpy;

  beforeEach(() => {
    useRefSpy = {current: { currentTime: 10}};

    wrapper = mount(
      <Root>
        <MemoryRouter>
          <VideoTrimController
            video={useRefSpy}
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
    expect(wrapper.contains(TimeRangeInputLabel)).toEqual(true);
    expect(wrapper.contains(TimeRangeInputConatianer)).toEqual(true);
    expect(wrapper.contains(TimeArrowInput)).toEqual(true);
    expect(wrapper.contains(TimeRangeInput)).toEqual(true);
    expect(wrapper.contains(NextButton)).toEqual(true);
  });

  it('should redirect when click next button', () => {
    expect(wrapper.find(Link).props().to).toBe('/create/add-image');
  });
});
