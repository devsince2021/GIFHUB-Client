import { requestSaveMediaFile } from '../api/mediaFileAPI';

import { SAVE_MEDIA_FILE_SUCCESS, SAVE_MEDIA_FILE_ERROR } from '../constants/actionTypes';

export async function saveFile(mediaFile) {

  const savedFile = await requestSaveMediaFile(mediaFile);
  console.log(savedFile,'hi')
  return {
    type: 'save_file',
    payload: savedFile,
  }
};
