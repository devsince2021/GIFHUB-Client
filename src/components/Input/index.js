import { forwardRef } from 'react'
import {decorateStyledComponent} from '../../utils';
import { StyledHeaderSearchInput, StyledFileSelectInput } from './styled'

export function HeaderSearchInput(props) {
  return decorateStyledComponent(StyledHeaderSearchInput, props);
}

const Binded = decorateStyledComponent.bind(this, StyledFileSelectInput);
export const FileSelectInput = forwardRef(Binded);
