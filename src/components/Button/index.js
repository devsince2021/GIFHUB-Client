import { decorateStyledComponent } from '../../utils';
import {
  StyledSearchIconButton,
  StyledCreateIconButton,
  StyledFileUploadIconButton,
  StyledEditFinishButton,
  StyledCancelButton,
  StyledNextButton,
} from './styled';

export const SearchIconButton = props => (
  decorateStyledComponent(StyledSearchIconButton, props)
);

export const CreateIconButton = props => (
  decorateStyledComponent(StyledCreateIconButton, props)
);

export const FileUploadIconButton = props => (
  decorateStyledComponent(StyledFileUploadIconButton, props)
);

export const EditFinishButton = props => (
  decorateStyledComponent(StyledEditFinishButton, props)
);

export const CancelButton = props => (
  decorateStyledComponent(StyledCancelButton, props)
);

export const NextButton = props => (
  decorateStyledComponent(StyledNextButton, props)
);
