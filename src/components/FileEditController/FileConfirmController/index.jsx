import React from 'react';
import { Description, ControllerLabel } from './styled';
import { EditFinishButton } from '../../Button';
import ToggleSlider from '../../ToggleSlider';

export default function FileConfirmController({
  uploadedFile,
  onSaveFinalFileFormat,
  onClick
}) {

  function generateOptionText() {
    if (uploadedFile.content_type.split('/')[1] === 'quicktime') {
      return 'MOV';
    }
    return uploadedFile.content_type.split('/')[1].toUpperCase();
  }

  function sliderClickHandler(format) {
    onSaveFinalFileFormat(format)
  }

  function finishButtonClickHandler() {
    onClick()
  }

  return(
    <>
      <Description>
        Check the final file and select format to finish!
      </Description>
      <ControllerLabel
        format='true'
      >
        Format
      </ControllerLabel>
      <ControllerLabel
        format='true'
        list='true'
      >
        <ToggleSlider
          optionText={generateOptionText()}
          onClick={sliderClickHandler}
        />
      </ControllerLabel>
      <EditFinishButton
        onClick={finishButtonClickHandler}
      >
        Create
      </EditFinishButton>
    </>
  );
}
