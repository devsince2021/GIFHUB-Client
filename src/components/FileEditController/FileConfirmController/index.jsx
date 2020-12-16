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
    return uploadedFile.content_type.split('/')[1].toUpperCase();
  }

  function sliderClickHandler() {
    onSaveFinalFileFormat()
  }

  function finishButtonClickHandler() {
    onClick()
  }

  return(
    <>
      <Description>
        Check the final file and select format to finish!
      </Description>
      <ControllerLabel format>
        Format
      </ControllerLabel>
      <ControllerLabel format list>
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
