import { decorateStyledComponent } from '../../util';
import {
  StyledSearchIconButton,
  StyledCreateIconButton,
  StyledModalCloseButton,
  StyledFileUploadIconButton,
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
