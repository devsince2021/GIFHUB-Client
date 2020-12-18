import { decorateStyledComponent } from '../../utils';
import {
  StyledSearchIconButton,
  StyledCreateIconButton,
  StyledModalCloseButton,
  StyledFileUploadIconButton,
  StyledEditFinishButton,
  StyledCancelButton,
} from './styled'

export function SearchIconButton(props) {
  return decorateStyledComponent(StyledSearchIconButton, props)
}

export function CreateIconButton(props) {
  return decorateStyledComponent(StyledCreateIconButton, props)
}

export function ModalCloseButton(props) {
  return decorateStyledComponent(StyledModalCloseButton, props)
}

export function FileUploadIconButton(props) {
  return decorateStyledComponent(StyledFileUploadIconButton, props)
}

export function EditFinishButton(props) {
  return decorateStyledComponent(StyledEditFinishButton, props)
}

export function CancelButton(props) {
  return decorateStyledComponent(StyledCancelButton, props)
}
