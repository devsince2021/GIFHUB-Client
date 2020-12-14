import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
  border: 1px solid red;
`;

export default function decorateStyledComponent( Component, props, forwardedRef ) {
    const { children, to, ...rest } = props;

    if (!to) {
      return (
        <Component ref={forwardedRef} {...rest}>
          {children}
        </Component>
      );
    }

  return(
    <StyledLink to={to}>
      <Component ref={forwardedRef} {...rest}>
        {children}
      </Component>
    </StyledLink>
  );
};
