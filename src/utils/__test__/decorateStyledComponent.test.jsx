import styled from 'styled-components';
import decorateStyledComponent, { StyledLink } from '../decorateStyledComponent';

describe('decorateStyledComponent', () => {
  const StlyedComponent = styled.button`
    font-size: 1rem;
  `;

  it('should return undefined when the first arguments is not given', () => {
    expect(decorateStyledComponent()).toEqual(undefined);
  });

  it('should return the given component with children', () => {
    const props = {
      children: 'test'
    };

    expect(decorateStyledComponent(StlyedComponent, props))
      .toEqual(<StlyedComponent>test</StlyedComponent>);
  });

  it('should return a component wrapped by Link when props has "to"', () => {
    const props = {
      children: 'test',
      to: '/edit',
    };

    expect(decorateStyledComponent(StlyedComponent, props))
      .toEqual(<StyledLink to="/edit" ><StlyedComponent>test</StlyedComponent></StyledLink>);
  });
});
