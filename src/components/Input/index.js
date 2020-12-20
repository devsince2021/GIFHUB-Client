import { forwardRef } from 'react';
import { decorateStyledComponent } from '../../utils';
import {
  StyledHeaderSearchInput,
  StyledFileSelectInput,
  StyledTimeRangeInput,
  StyledTimeArrowInput,
} from './styled';

export const HeaderSearchInput = props => (
  decorateStyledComponent(StyledHeaderSearchInput, props)
);

const Binded = decorateStyledComponent.bind(this, StyledFileSelectInput);
export const FileSelectInput = forwardRef(Binded);

export const TimeRangeInput = props => (
  decorateStyledComponent(StyledTimeRangeInput, props)
);

export const TimeArrowInput = props => (
  decorateStyledComponent(StyledTimeArrowInput, props)
);
