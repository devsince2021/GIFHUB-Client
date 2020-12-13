import React from 'react';
import { Wrapper } from './styled';

export default function Header({ children, ...rest }) {
  return(
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
}
