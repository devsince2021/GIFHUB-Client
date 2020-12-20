import React from 'react';
import { Wrapper } from './styled';

const Header = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

export default Header;
