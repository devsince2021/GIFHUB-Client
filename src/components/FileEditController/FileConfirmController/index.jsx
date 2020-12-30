import React from 'react';
import PropTypes from 'prop-types';
import { Description, ControllerLabel } from './styled';
import { EditFinishButton } from '../../Button';
import ToggleSlider from '../../ToggleSlider';

export const FileConfirmController = ({
  uploadedFile,
  onSaveFinalFileFormat,
  onClick
}) => {
  const generateOptionText = () => {
    if (uploadedFile.content_type.split('/')[1] === 'quicktime') {
      return 'MOV';
    }
    return uploadedFile.content_type.split('/')[1].toUpperCase();
  };
  
  const sliderClickHandler = format => {
    onSaveFinalFileFormat(format);
  };

  const finishButtonClickHandler = () => {
    onClick();
  };

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
};

export default FileConfirmController;

FileConfirmController.propTypes = {
  uploadedFile: PropTypes.object.isRequired,
  onSaveFinalFileFormat: PropTypes.func,
  onClick: PropTypes.func,
};
