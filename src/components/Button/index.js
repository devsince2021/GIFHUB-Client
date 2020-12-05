import decorateStyledComponent from '../../util/decorateStyledComponent';
import { StyledSearchIconButton, StyledCreateIconButton, StyledModalCloseButton } from './styled'

export function SearchIconButton(props) {
  return decorateStyledComponent(StyledSearchIconButton, props)
}

export function CreateIconButton(props) {
  return decorateStyledComponent(StyledCreateIconButton, props)
}

export function ModalCloseButton(props) {
  return decorateStyledComponent(StyledModalCloseButton, props)
}
