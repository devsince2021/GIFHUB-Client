import { decorateStyledComponent } from '../../utils';
import {
  StyledSearchIconButton,
  StyledCreateIconButton,
  StyledModalCloseButton,
  StyledFileUploadIconButton,
  StyledNextStepButton,
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

export function NextStepButton(props) {
  return decorateStyledComponent(StyledNextStepButton, props)
}
