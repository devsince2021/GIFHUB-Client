import { forwardRef } from 'react'
import { decorateStyledComponent } from '../../utils';
import {
  StyledHeaderSearchInput,
  StyledFileSelectInput,
  StyledTimeRangeInput,
  StyledTimeArrowInput,
} from './styled'

export function HeaderSearchInput(props) {
  return decorateStyledComponent(StyledHeaderSearchInput, props);
}

const Binded = decorateStyledComponent.bind(this, StyledFileSelectInput);
export const FileSelectInput = forwardRef(Binded);

export function TimeRangeInput(props) {
  return decorateStyledComponent(StyledTimeRangeInput, props);
}

export function TimeArrowInput(props) {
  return decorateStyledComponent(StyledTimeArrowInput, props);
}

