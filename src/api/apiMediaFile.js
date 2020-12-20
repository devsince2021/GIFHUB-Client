import axios from 'axios';
import { SERVER_URL } from '../constants/http';

const config = {
  header: { 'content-type': 'multipart/form-data'}
}

export async function uploadMediaFile(mediaFile) {
  try {
    const response = await axios.post(
      `${SERVER_URL}/mediaFile`,
      mediaFile,
      config,
    );

    return response.data;

  } catch (err) {
    throw new Error('Error in uploadMediaFile:', err);
  }
}

export async function createFinalFile(options) {
  try {
    const {
      uploadedFile,
      imageFile,
      duration,
      startTime,
      format,
      imageSizeAndPosition,
    } = options;
    const { top, left, width, height } = imageSizeAndPosition;

    const url = `
    ${SERVER_URL}/mediaFile/${uploadedFile._id}/finalFile?format=${format}&startTime=${startTime}&duration=${duration}&top=${top}&left=${left}&width=${width}&height=${height}
    `;

    const response = await axios.post(
      url,
      imageFile,
      config,
    );

    return response.data;
  } catch (err) {
    throw new Error('Error in createFinalFile:', err);
  }
}

export async function getAllMediaFile() {
  try {
    const res = await axios.get(`${SERVER_URL}/mediaFile`);
    return res.data.filter((media) => !media.key);
  } catch (err) {
    throw new Error('Error in createFinalFile:', err);
  }
}
