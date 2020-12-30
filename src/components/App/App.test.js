import Root from '../../Root';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '.';
import { EditorPageContainer, MainPageContainer } from '../../containers';

describe('App', () => {
  it('should render MainPageContainer when user approches to / route', () => {
    const wrapper = mount(
        <Root>
          <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <App />
          </MemoryRouter>
        </Root>
    );

    expect(wrapper.find(MainPageContainer)).toHaveLength(1);
    expect(wrapper.find(EditorPageContainer)).toHaveLength(0);
  });
});
