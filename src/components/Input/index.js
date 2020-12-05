import { forwardRef } from 'react'
import decorateStyledComponent from '../../util/decorateStyledComponent';
import { StyledHeaderSearchInput, StyledFileUploadInput } from './styled'

export function HeaderSearchInput(props) {
  return decorateStyledComponent(StyledHeaderSearchInput, props);
}

const Binded = decorateStyledComponent.bind(this, StyledFileUploadInput);
export const FileUploadInput = forwardRef(Binded);
