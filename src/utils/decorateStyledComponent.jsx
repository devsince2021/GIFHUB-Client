import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  grid-column: ${({ theme, grid }) => theme.position[grid].column};
  grid-row: ${({ theme, grid }) => theme.position[grid].row};
  display: grid;
  text-decoration: none;
`;

const decorateStyledComponent = (Component, props, forwardedRef) => {
  const { children, to, position, ...rest } = props;

  if (to) {
    return (
      <StyledLink to={to} grid={position}>
          <Component ref={forwardedRef} {...rest}>
            {children}
          </Component>
      </StyledLink>
    );
  }

  return (
    <Component ref={forwardedRef} {...rest}>
      {children}
    </Component>
  );
};

export default decorateStyledComponent;
