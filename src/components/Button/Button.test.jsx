import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Root from '../../Root';
import {
  NextButton,
  SearchIconButton,
  CreateIconButton,
  FileUploadIconButton,
  EditFinishButton,
  CancelButton,
} from '.';

describe('Buttons', () => {
  let testButton;
  const props = {
    children: 'test',
  };

  it('Button with Link', () => {
    const mockFn = jest.fn();
    props.onClick = mockFn;
    props.to = '/test';

    testButton = mount(
      <Root>
        <MemoryRouter>
          {NextButton(props)}
        </MemoryRouter>
      </Root>
    );

    expect(testButton.find(Link).props().to).toBe('/test');
    expect(testButton.text()).toEqual('test');
    testButton.find('button').simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);

    props.to = null;
    testButton.unmount();
  });

  it('Button without Link', () => {
    const list = [
      SearchIconButton,
      CreateIconButton,
      FileUploadIconButton,
      EditFinishButton,
      CancelButton,
    ];

    for (let i = 0; i < list.length; i++) {
      const mockFn = jest.fn();
      props.onClick = mockFn;

      testButton = mount(
        <Root>
          {list[i](props)}
        </Root>
      );

      expect(testButton.text()).toEqual('test');
      testButton.find('button').simulate('click');
      expect(mockFn.mock.calls.length).toEqual(1);
      testButton.unmount();
    }
  });
});
