import React from 'react';
import { Description, ControllerLabel } from './styled';
import ToggleSlider from '../../ToggleSlider';

export default function FileConfirmController({
  uploadedFile,
  onSaveFinalFileFormat,
}) {

  function generateOptionText() {
    return uploadedFile.content_type.split('/')[1].toUpperCase();
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
          onClick={onSaveFinalFileFormat}
        />
      </ControllerLabel>

    </>
  );
}
